import * as THREE from 'three';
import { Input } from '../game/Input.js';
import { Collision } from '../game/Collision.js';
import { CameraRig } from '../game/Camera.js';
import { Player } from '../game/Player.js';
import { EnemyAI, Nav } from '../game/EnemyAI.js';
import { ITEMS } from '../game/Inventory.js';
import { buildMansion } from '../environments/Mansion.js';
import { ROOMS, ITEM_PLACEMENTS, NAV_NODES, WATCHER_PATROL, CRAWLER_SPAWNS, DOCS } from '../environments/Rooms.js';
import * as P from '../environments/Props.js';
import { buildWatcher } from '../entities/Watcher.js';
import { buildCrawler } from '../entities/Crawler.js';
import { buildShadow } from '../entities/Shadow.js';
import { buildPossessedFox } from '../entities/PossessedFox.js';
import { HUD } from '../ui/HUD.js';
import { PauseMenu } from '../ui/PauseMenu.js';
import { openInventory, readDocument } from '../ui/InventoryUI.js';
import { h, root, MenuList, modal, slotPicker } from '../ui/ui.js';

const ITEM_Y = { l_doc: 1.05, o_doc: 1.1, o_cry: 1.15, k_doc: 1.05, b_doc: 0.95 };
const DARK_ROOMS = ['bedrooms', 'lab', 'kitchen'];
const TOTAL_CRYSTALS = ITEM_PLACEMENTS.filter((i) => i.type === 'crystal').length + 1; // +1 inside the office safe
const FOX_PATROL = [[-6, -4], [6, -4], [0, -9], [-6, -13], [6, -13], [0, -6]];
const FOX_NAV = [[0, -3], [-6, -3], [6, -3], [0, -8.5], [-7, -9], [7, -9], [0, -12], [-7, -14], [7, -14], [-2, -6], [2, -6]];
const inside = (r, x, z, m = 0) => x >= r.x1 + m && x <= r.x2 - m && z >= r.z1 + m && z <= r.z2 - m;

/** The playable chapter: exploration, puzzles, enemies, saving. */
export class MansionScene {
  constructor(app) {
    this.app = app; this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(62, 1.6, 0.1, 140);
    this.col = new Collision(); this.input = new Input(window);
    this.paused = false; this.uiOpen = false; this.skip = 0; this.basis = null; this.t = 0;
    this.items = []; this.enemies = []; this.fireCd = 0; this.beam = null; this.lampT = null; this.hiddenT = 0; this.over = false; this.stepAcc = 0; this.hb = 0;
  }
  get S() { return this.app.settings; }

  enter({ state, intro }) {
    const app = this.app, st = (this.st = state), sc = this.scene;
    this.hud = new HUD(); this.pause = new PauseMenu(app, this);
    // lights
    this.ambient = new THREE.AmbientLight(0x2a2040, 0.6); this.moon = new THREE.DirectionalLight(0x7080ff, 0.0); this.moon.position.set(-20, 40, 30);
    this.lamp = new THREE.PointLight(0xffb070, 1.5, 20, 1.6);
    sc.add(this.ambient, this.moon, this.lamp);
    this.world = buildMansion(sc, this.col);
    // player
    this.player = new Player(); sc.add(this.player.group);
    this.player.setPos(st.pos.x, st.pos.z, st.pos.ry);
    this.player.setLight(st.light && st.battery > 0);
    this.rig = new CameraRig(this.camera); this.rig.sens = this.S.get('sensitivity');
    this.setShadows();
    // items
    for (const d of ITEM_PLACEMENTS) { if (st.taken.includes(d.id) || (d.req && !st.flags[d.req])) continue; this.spawnItem(d); }
    // doors
    for (const [id, dr] of Object.entries(this.world.doors)) if (st.doors[id]) dr.setOpen(true, true);
    if (st.flags.secret) this.world.doors.secret.setOpen(true, true);
    if (st.flags.sealed) this.world.doors.front.setOpen(false, true);
    // enemies
    const nav = new Nav(NAV_NODES, this.col), navFox = new Nav(FOX_NAV, this.col);
    const w = buildWatcher(); sc.add(w.group);
    this.watcher = { ai: new EnemyAI({ x: 36, z: 12, patrol: WATCHER_PATROL, nav, speedPatrol: 1.5, speedChase: 3.5, sight: 12, damage: 34, home: { x: 36, z: 12 } }), model: w, kind: 'watcher', alive: true };
    const f = buildPossessedFox(); sc.add(f.group);
    this.fox = { ai: new EnemyAI({ x: -6, z: -14, patrol: FOX_PATROL, nav: navFox, speedPatrol: 1.8, speedChase: 3.7, sight: 20, fov: Math.PI * 2, damage: 30, attackRange: 1.7, home: { x: -6, z: -14 } }), model: f, kind: 'fox', alive: true };
    this.crawlers = CRAWLER_SPAWNS.map(([x, z], i) => {
      const c = buildCrawler(); sc.add(c.group);
      return { ai: new EnemyAI({ x, z, patrol: [[x, z], [x + 2, z + 1.5], [x - 1, z + 2]], speedPatrol: 1.0, speedChase: 3.1, sight: 8, fov: Math.PI * 2, damage: 10, attackRange: 1.0, windup: 0.25, radius: 0.3, ignoreDoors: false, hearWalk: 6, home: { x, z } }), model: c, kind: 'crawler', alive: true };
    });
    this.enemies = [this.watcher, this.fox, ...this.crawlers];
    this.shadows = [0, 1].map(() => { const m = buildShadow(); m.group.visible = false; sc.add(m.group); return { kind: 'shadow', alive: true, model: m, ai: { x: 0, z: 0, ry: 0, moving: false }, state: 'gone', timer: 3, lit: 0, cd: 0 }; });
    if (st.flags.lab_open) this.world.lever.rod.rotation.z = -1;
    this.syncEnemyVisibility();
    // room
    this.room = this.roomAt(st.pos.x, st.pos.z) || ROOMS[5];
    this.applyRoom(this.room, true); this.rig.setRoom(this.room); this.rig.snap(this.player, this.col);
    this.hud.roomName(this.room.name);
    app.audio.stopMusic(); app.audio.startAmbient(); app.audio.startMusic(this.room.music || 'game');
    this.onSettings();
    if (intro) {
      this.skip = 2;
      this.hud.say([
        { who: 'Willow', text: 'This is the place... the house from my dreams.', color: '#ff8a1e' },
        { who: 'Willow', text: 'The light in the top window is on. Somebody is home.', color: '#ff8a1e' },
      ], () => this.hud.toast('WASD move · SHIFT run · E interact · F flashlight · I inventory · SPACE fire', 6));
    }
  }

  // ---------- helpers ----------
  spawnItem(d) {
    const m = P.itemMesh(d.type); const y = ITEM_Y[d.id] ?? (d.type === 'crystal' ? 0.6 : 0.4);
    m.position.set(d.x, y, d.z); this.scene.add(m); this.items.push({ d, m, y });
  }
  revealReq(req) { for (const d of ITEM_PLACEMENTS) if (d.req === req && !this.st.taken.includes(d.id) && !this.items.some((i) => i.d === d)) this.spawnItem(d); }
  roomAt(x, z) { return ROOMS.find((r) => inside(r, x, z)); }
  setShadows() {
    const q = this.S.get('shadowQuality'), sp = this.player.spot;
    sp.castShadow = q !== 'off';
    const size = q === 'medium' ? 512 : 256;
    if (sp.shadow.mapSize.x !== size) { sp.shadow.mapSize.set(size, size); if (sp.shadow.map) { sp.shadow.map.dispose(); sp.shadow.map = null; } }
    sp.shadow.camera.near = 0.5; sp.shadow.camera.far = 24; sp.shadow.bias = -0.002;
  }
  onSettings() { if (!this.player) return; this.setShadows(); this.rig.sens = this.S.get('sensitivity'); }
  syncEnemyVisibility() {
    const f = this.st.flags;
    this.watcher.model.group.visible = !!f.watcher_on && this.watcher.alive;
    this.fox.model.group.visible = !!f.fox_on;
    this.crawlers.forEach((c) => { c.model.group.visible = c.alive; });
  }
  applyRoom(r, snap) {
    this.amb = { c: new THREE.Color(r.amb[0]), i: r.amb[1] };
    this.lampT = { ...r.lamp, p: new THREE.Vector3(...r.lamp.p), c: new THREE.Color(r.lamp.c) };
    this.fogCol = new THREE.Color(r.fog);
    this.world.sky.forEach((o) => { o.visible = !!r.outdoor; });
    if (!this.scene.fog) this.scene.fog = new THREE.FogExp2(r.fog, 0.03);
    if (snap) { this.ambient.color.copy(this.amb.c); this.ambient.intensity = this.amb.i; this.lamp.position.copy(this.lampT.p); this.lamp.color.copy(this.lampT.c); this.lamp.intensity = this.lampT.i; this.scene.fog.color.copy(this.fogCol); }
    this.moon.intensity = r.outdoor ? 0.55 : 0;
    this.baseFog = r.outdoor ? 0.04 : 0.03;
    if (this.app.audio.theme !== (r.music || 'game') && !this.st.flags.fox_on) this.app.audio.startMusic(r.music || 'game');
  }
  say(lines, done) { this.hud.say(lines, () => { this.skip = 2; done && done(); }); }
  nameOf(it) { if (it.d.type === 'doc') return 'Read ' + DOCS[it.d.doc].title; if (it.d.type === 'crystal') return 'Take Purple Crystal'; if (it.d.type === 'ammo') return 'Take Ammo'; return 'Take ' + ITEMS[it.d.type].name; }

  // ---------- main loop ----------
  update(dt, time) {
    this.t += dt; const inp = this.input, st = this.st, hud = this.hud, pl = this.player;
    if (this.skip > 0) { this.skip--; inp.clear(); }
    this.world.update(dt, this.t);
    hud.update(st, dt);
    if (this.paused || this.uiOpen || this.over) { this.animateOnly(dt); inp.endFrame(); return; }

    // dialogue consumes the action key
    if (hud.talking) {
      pl.model.setAnim('idle'); pl.model.update(dt);
      if (inp.wasPressed('KeyE') || inp.wasPressed('Enter') || inp.wasPressed('Space') || inp.mousePressed) hud.next();
      this.camAndLights(dt, 0); inp.endFrame(); return;
    }
    if (inp.wasPressed('Escape')) { this.paused = true; this.pause.show(); inp.endFrame(); return; }
    if (inp.wasPressed('KeyI') && !pl.dead) { this.openInventory(); inp.endFrame(); return; }
    st.playTime += dt;

    if (!pl.dead) {
      if (inp.wasPressed('KeyF') && !pl.hidden) this.toggleLight();
      this.fireCd -= dt;
      if ((inp.wasPressed('Space') || inp.mousePressed) && !pl.hidden) this.fire();
      this.movement(dt);
      this.interaction();
      // flashlight battery
      if (st.light && st.battery > 0 && !pl.hidden) { st.battery = Math.max(0, st.battery - dt * 0.22); if (st.battery <= 0) { this.toggleLight(true); hud.toast('The flashlight died.'); } }
      pl.invuln = Math.max(0, pl.invuln - dt);
      this.trackRoom();
    }
    this.updateEnemies(dt);
    this.animateItems(dt);
    this.camAndLights(dt, 1);
    inp.endFrame();
  }
  animateOnly(dt) { this.player.model.update(dt); this.animateItems(dt); this.camAndLights(dt, 0); }
  animateItems(dt) { for (const it of this.items) { it.m.rotation.y += dt * 1.6; it.m.position.y = it.y + Math.sin(this.t * 2 + it.d.x) * 0.05; } }

  camAndLights(dt, live) {
    const inp = this.input, pl = this.player;
    let yaw = 0;
    if (live) { yaw = ((inp.isDown('ArrowLeft') ? 1 : 0) - (inp.isDown('ArrowRight') ? 1 : 0)) * dt * 2 - inp.mouseDX * 0.005; }
    this.rig.update(dt, pl, this.col, yaw);
    const k = 1 - Math.exp(-dt * 3);
    this.ambient.color.lerp(this.amb.c, k); this.ambient.intensity += (this.amb.i - this.ambient.intensity) * k;
    this.lamp.position.lerp(this.lampT.p, k); this.lamp.color.lerp(this.lampT.c, k);
    const fl = 1 + Math.sin(this.t * 17) * 0.03 + (Math.random() < 0.02 ? -0.25 : 0);
    this.lamp.intensity += (this.lampT.i * fl - this.lamp.intensity) * Math.min(1, dt * 8); this.lamp.distance = this.lampT.d;
    this.scene.fog.color.lerp(this.fogCol, k); this.scene.background = this.scene.fog.color;
    this.scene.fog.density = this.baseFog * this.S.get('fog');
    if (this.beam) { this.beam.t -= dt; if (this.beam.t <= 0) { this.scene.remove(this.beam.m); this.beam = null; } }
    if (this.player.light) pl.spot.intensity = 3.2 + Math.sin(this.t * 23) * 0.05;
  }

  movement(dt) {
    const inp = this.input, pl = this.player;
    if (pl.hidden) { pl.model.setAnim('hide'); pl.model.update(dt); if (inp.wasPressed('KeyE')) this.exitHide(); return; }
    const fwd = (inp.isDown('KeyW') || inp.isDown('ArrowUp') ? 1 : 0) - (inp.isDown('KeyS') || inp.isDown('ArrowDown') ? 1 : 0);
    const rgt = (inp.isDown('KeyD') ? 1 : 0) - (inp.isDown('KeyA') ? 1 : 0);
    let dir = null;
    if (fwd || rgt) {
      if (!this.basis) this.basis = this.rig.basis();       // direction is latched while keys stay held (fixed-camera feel)
      const b = this.basis; let x = b.fx * fwd + b.rx * rgt, z = b.fz * fwd + b.rz * rgt; const l = Math.hypot(x, z) || 1; dir = { x: x / l, z: z / l };
    } else this.basis = null;
    const run = inp.isDown('ShiftLeft') || inp.isDown('ShiftRight');
    const stepped = pl.move(dt, dir, run, this.col);
    if (stepped) this.app.audio.footstep(run);
    if (pl.model.anim !== 'hurt') pl.model.setAnim(this.over ? 'idle' : dir ? (run ? 'run' : 'walk') : (this.t % 14 > 11 ? 'look' : 'idle'));
    pl.model.update(dt);
  }

  toggleLight(forceOff) {
    const st = this.st; const on = forceOff ? false : !st.light;
    if (on && st.battery <= 0) { this.hud.toast('The battery is empty.'); this.app.audio.locked(); return; }
    st.light = on; this.player.setLight(on); this.app.audio.click();
  }

  // ---------- combat ----------
  fire() {
    const st = this.st, pl = this.player;
    if (this.fireCd > 0) return; this.fireCd = 0.5;
    if (st.ammo <= 0) { this.app.audio.click(); this.hud.toast('Out of ammo.'); return; }
    st.ammo--; this.app.audio.shoot(); this.app.audio.flash();
    const fx = Math.sin(pl.ry), fz = Math.cos(pl.ry);
    const geo = new THREE.BoxGeometry(0.06, 0.06, 12), m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xd9a0ff }));
    m.position.set(pl.x + fx * 6.5 - Math.cos(pl.ry) * 0.6, 1.5, pl.z + fz * 6.5 + Math.sin(pl.ry) * 0.6); m.rotation.y = pl.ry; this.scene.add(m); this.beam = { m, t: 0.08 };
    let best = null, bd = 1e9;
    for (const e of [...this.enemies, ...this.shadows]) {
      if (!e.alive || !e.model.group.visible) continue;
      const dx = e.ai.x - pl.x, dz = e.ai.z - pl.z, d = Math.hypot(dx, dz);
      if (d > 13 || d < 0.1) continue;
      const dot = (fx * dx + fz * dz) / d; if (dot < 0.93 - (d < 3 ? 0.2 : 0)) continue;
      if (this.col.segmentBlocked(pl.x, pl.z, e.ai.x, e.ai.z)) continue;
      if (d < bd) { bd = d; best = e; }
    }
    if (!best) return;
    if (best.kind === 'crawler') { best.alive = false; best.model.group.visible = false; this.app.audio.hit(); this.hud.toast('Crawler destroyed.'); }
    else if (best.kind === 'shadow') { best.state = 'gone'; best.timer = 9; best.model.group.visible = false; this.app.audio.hit(); this.hud.toast('The shadow dissolves.'); }
    else if (best.kind === 'watcher') { best.ai.stagger = 2.8; this.app.audio.growl(); this.hud.toast('The Watcher is stunned!'); }
    else this.hud.toast('It does not even flinch...');
  }
  hurtPlayer(dmg) {
    const st = this.st, pl = this.player;
    if (pl.invuln > 0 || pl.dead) return;
    st.hp -= dmg; pl.invuln = 1.1; this.app.audio.hit(); this.hud.hurt(); pl.model.setAnim('hurt');
    if (st.hp <= 0) this.die();
  }
  die() {
    const pl = this.player, st = this.st; pl.dead = true; pl.model.setAnim('death'); this.app.audio.stinger(); pl.setLight(false);
    setTimeout(() => { if (!this.live) return; this.hud.fade(true); }, 900);
    setTimeout(() => {
      if (!this.live) return;
      st.lives--;
      if (st.lives <= 0) { this.gameOver(); return; }
      st.hp = 60; pl.dead = false; pl.hidden = false; pl.group.visible = true; pl.model.setAnim('idle');
      const c = st.checkpoint; pl.setPos(c.x, c.z, c.ry); pl.setLight(st.light && st.battery > 0);
      this.enemies.forEach((e) => e.ai.reset()); this.shadows.forEach((x) => { x.state = 'gone'; x.timer = 3; });
      this.room = this.roomAt(c.x, c.z) || this.room; this.rig.setRoom(this.room); this.applyRoom(this.room, true); this.rig.snap(pl, this.col);
      this.hud.fade(false); this.hud.toast('LIFE LOST — ' + st.lives + ' left', 3.5); this.skip = 2;
    }, 2600);
  }
  get live() { return !!this.hud; }
  gameOver() {
    this.over = true; const app = this.app;
    const o = h('div', 'full black'); o.style.zIndex = 30; o.innerHTML = '<div class="px big" style="color:#b3122e;font-size:clamp(40px,9vw,110px)">GAME OVER</div><div class="small" style="margin:10px 0 24px">The house remembers you.</div>';
    const last = app.saves.last();
    const menu = new MenuList(app, [
      { label: last ? 'RETRY FROM LAST SAVE' : 'TRY AGAIN', action: () => { menu.detach(); o.remove(); this.loadFrom(last); } },
      { label: 'RETURN TO MAIN MENU', action: () => { menu.detach(); o.remove(); app.goto('menu'); } },
    ]); o.appendChild(menu.el); root().appendChild(o); menu.attach();
  }

  // ---------- enemies ----------
  updateEnemies(dt) {
    const st = this.st, pl = this.player, a = this.app.audio;
    const ps = { x: pl.x, z: pl.z, hidden: pl.hidden, dead: pl.dead, running: pl.running, moving: pl.moving, light: pl.light };
    let nearest = 99, chasing = false, hiddenDanger = false;
    // doors open for the Watcher
    const wOn = !!st.flags.watcher_on;
    for (const e of this.enemies) {
      const on = (e.kind === 'watcher' && wOn) || (e.kind === 'fox' && st.flags.fox_on) || (e.kind === 'crawler' && st.flags.crawlers_on);
      if (!on || !e.alive) continue;
      const ev = e.ai.update(dt, ps, this.col);
      for (const x of ev) { if (x === 'alert') { a.stinger(); if (e.kind === 'watcher') this.hud.toast('It has seen you. RUN!'); } if (x === 'attack') { this.hurtPlayer(e.ai.damage); if (e.kind === 'crawler') a.hit(); } }
      const g = e.model.group; g.position.set(e.ai.x, 0, e.ai.z); g.rotation.y = e.ai.ry;
      const chase = e.ai.state === 'chase' || e.ai.state === 'attack';
      if (e.kind === 'fox') e.model.update(dt, e.ai.moving); else e.model.update(this.t, e.ai.moving ? 1 : 0, chase);
      if (e.kind === 'fox') e.model.setAnim(e.ai.moving ? (chase ? 'run' : 'walk') : 'idle');
      const d = Math.hypot(e.ai.x - pl.x, e.ai.z - pl.z); nearest = Math.min(nearest, d); if (chase) chasing = true;
      if (pl.hidden && d < 2.3 && e.kind !== 'crawler') hiddenDanger = true;
    }
    if (wOn && this.watcher.alive) this.watcherDoors();
    this.updateShadows(dt);
    this.hb -= dt; if ((chasing || nearest < 5) && this.hb <= 0) { a.heartbeat(); this.hb = chasing ? 0.7 : 1.1; }
    if (pl.hidden) { this.hiddenT = hiddenDanger ? this.hiddenT + dt : Math.max(0, this.hiddenT - dt); if (this.hiddenT > 3.2) { this.hiddenT = 0; this.exitHide(); this.hurtPlayer(30); this.hud.toast('It found you!'); } }
  }
  updateShadows(dt) {
    const st = this.st, pl = this.player, t = this.t;
    const dark = !!st.flags.shadows_on && DARK_ROOMS.includes(this.room.id) && !pl.dead;
    for (const s of this.shadows) {
      const a = s.ai;
      if (!dark) { s.model.group.visible = false; s.state = 'gone'; s.timer = Math.min(s.timer, 2.5); continue; }
      if (s.state === 'gone') { s.timer -= dt; s.model.group.visible = false; if (s.timer <= 0) this.spawnShadow(s); continue; }
      s.model.group.visible = true; s.cd -= dt;
      const dx = pl.x - a.x, dz = pl.z - a.z, d = Math.hypot(dx, dz) || 1;
      const dot = (Math.sin(pl.ry) * -dx + Math.cos(pl.ry) * -dz) / d;
      const lit = pl.light && !pl.hidden && d < 13 && dot > 0.8 && !this.col.segmentBlocked(pl.x, pl.z, a.x, a.z);
      s.lit = lit ? s.lit + dt : Math.max(0, s.lit - dt * 0.6);
      if (s.lit > 0.8) { s.state = 'gone'; s.timer = 7; s.model.group.visible = false; continue; }
      a.moving = false;
      if (!lit && !pl.hidden) {
        const sp = pl.light ? 2.1 : 3.2, k = Math.min(d, sp * dt) / d;
        const r = this.col.resolve(a.x + dx * k, a.z + dz * k, 0.35); a.x = r.x; a.z = r.z; a.moving = true; a.ry = Math.atan2(dx, dz);
      }
      if (d < 1.1 && s.cd <= 0 && !pl.hidden) { s.cd = 1.4; this.hurtPlayer(15); }
      const g = s.model.group; g.position.set(a.x, 0, a.z); g.rotation.y = a.ry; s.model.update(t, a.moving, Math.min(1, s.lit / 0.8));
    }
  }
  spawnShadow(s) {
    const r = this.room, pl = this.player;
    for (let i = 0; i < 14; i++) {
      const x = r.x1 + 2 + Math.random() * (r.x2 - r.x1 - 4), z = r.z1 + 2 + Math.random() * (r.z2 - r.z1 - 4);
      if (Math.hypot(x - pl.x, z - pl.z) < 7) continue;
      const c = this.col.resolve(x, z, 0.4); if (Math.hypot(c.x - x, c.z - z) > 0.01) continue;
      s.ai.x = x; s.ai.z = z; s.state = 'stalk'; s.lit = 0; s.cd = 1; return;
    }
    s.timer = 1;
  }
  watcherDoors() {
    const w = this.watcher.ai, pl = this.player;
    for (const id of ['corridor', 'library']) {
      const d = this.world.doors[id], dw = Math.hypot(w.x - d.x, w.z - d.z), dp = Math.hypot(pl.x - d.x, pl.z - d.z);
      if (dw < 2.8 && d.target === 0) { d.setOpen(true); d.byEnemy = true; this.app.audio.door(); }
      else if (d.byEnemy && dw > 6 && dp > 4 && d.target === 1) { d.setOpen(false); d.byEnemy = false; }
    }
  }

  // ---------- rooms & story ----------
  trackRoom() {
    const pl = this.player; const c = ROOMS.find((r) => inside(r, pl.x, pl.z, 0.4));
    if (!c || c === this.room) return;
    this.room = c; this.rig.setRoom(c); this.applyRoom(c); this.hud.roomName(c.name);
    const st = this.st; st.room = c.id; st.roomName = c.name;
    st.checkpoint = { x: pl.x, z: pl.z, ry: pl.ry };
    this.basis = this.basis; // keep latched direction across camera cuts
    const f = st.flags, d = this.world.doors, au = this.app.audio;
    if (c.id === 'hall' && !f.hall_seen) {
      f.hall_seen = true;
      setTimeout(() => { if (!this.live) return; d.front.setOpen(false); f.sealed = true; au.door(); au.stinger(); f.watcher_on = true; this.watcher.ai.reset(); this.syncEnemyVisibility();
        this.say([{ who: 'Willow', text: 'The door slammed shut behind me!', color: '#ff8a1e' }, { who: 'Willow', text: 'Something is moving in this house. I need to find another way out.', color: '#ff8a1e' }]); }, 700);
    }
    if (c.id === 'library' && !f.lib_seen) { f.lib_seen = true; f.crawlers_on = true; this.hud.toast('Something skitters between the shelves...', 3.5); au.whisper(); }
    if (c.id === 'cellar' && !f.cellar_seen) {
      f.cellar_seen = true; d.cellar.setOpen(false); f.cellar_sealed = true; f.fox_on = true; f.watcher_on = false; this.watcher.model.group.visible = false; au.door(); au.stopMusic(); au.startMusic('final'); au.growl();
      this.syncEnemyVisibility();
      this.say([{ who: '???', text: '...Willow...', color: '#a64dff' }, { who: 'Willow', text: 'That voice... it sounds like mine.', color: '#ff8a1e' }, { who: 'Willow', text: 'The altar. Whatever I came here for, it is on the altar.', color: '#ff8a1e' }]);
    }
    if (c.id === 'bedrooms' && !f.bed_seen) { f.bed_seen = true; f.shadows_on = true; au.whisper(); this.say([{ who: 'Willow', text: 'Did that shadow just move?', color: '#ff8a1e' }, { who: 'Willow', text: 'Light seems to make them fade. Keep the flashlight pointed at them.', color: '#ff8a1e' }]); }
    if (c.id === 'kitchen' && !f.kit_seen) { f.kit_seen = true; f.shadows_on = true; this.hud.toast('Something stirs in the dark corners...', 3.5); }
    if (c.id === 'lab' && !f.lab_seen) { f.lab_seen = true; au.stinger(); this.say([{ who: 'Willow', text: 'So this is where the crystals came from...', color: '#ff8a1e' }, { who: 'Willow', text: 'Memories. Somebody turned memories into stone.', color: '#ff8a1e' }]); }
    this.autosave();
  }
  snapshot() {
    const st = this.st, pl = this.player;
    st.pos = { x: pl.x, z: pl.z, ry: pl.ry }; st.light = this.st.light;
    for (const [id, dr] of Object.entries(this.world.doors)) st.doors[id] = dr.target > 0.5;
    return st.serialize();
  }
  autosave() { this.app.saves.save('auto', this.snapshot()); }
  saveTo(id) { const ok = this.app.saves.save(id, this.snapshot()); this.hud.toast(ok ? 'Game saved.' : 'Save failed (storage unavailable).'); this.app.audio.pickup(); }
  loadFrom(id) {
    const d = id && this.app.saves.load(id);
    if (!d) { this.app.goto('game', { state: new (this.st.constructor)(), intro: true }); return; }
    this.app.goto('game', { state: this.st.constructor.from(d) });
  }

  // ---------- interaction ----------
  interaction() {
    const pl = this.player, st = this.st, inp = this.input, w = this.world; let best = null, bd = 1e9;
    const consider = (x, z, r, label, act) => { const d = Math.hypot(pl.x - x, pl.z - z); if (d < r && d < bd) { bd = d; best = { label, act }; } };
    if (pl.hidden) { this.hud.setPrompt('E — Come out'); return; }
    for (const it of this.items) consider(it.d.x, it.d.z, 1.6, this.nameOf(it), () => this.pickItem(it));
    for (const d of Object.values(w.doors)) consider(d.x, d.z, d.def.shelf ? 2.6 : 2.3, (d.target > 0.5 ? 'Close ' : 'Open ') + d.def.name, () => this.useDoor(d));
    for (const s of w.saves) consider(s.x, s.z, 1.7, 'Save game', () => this.useSave());
    for (const k of w.wardrobes) consider(k.fx, k.fz, 1.5, 'Hide', () => this.enterHide(k));
    consider(w.safe.x, w.safe.z, 1.8, st.flags.safe_open ? 'Empty safe' : 'Use safe', () => this.useSafe());
    consider(w.panel.x, w.panel.z, 1.9, st.flags.secret ? 'Symbol panel (solved)' : 'Examine symbol panel', () => this.usePanel());
    consider(w.stove.x, w.stove.z, 1.7, st.flags.cabinet ? 'Stove (nothing more here)' : 'Turn the stove dials', () => this.useStove());
    consider(w.lever.x, w.lever.z, 1.7, st.flags.lab_open ? 'Lever (already pulled)' : 'Pull the lever', () => this.useLever());
    consider(w.machine.x, w.machine.z, 2.2, st.flags.machine ? 'Machine (running)' : 'Examine the machine', () => this.useMachine());
    consider(w.altar.x, w.altar.z, 2.4, 'Touch the altar', () => this.useAltar());
    this.hud.setPrompt(best ? 'E — ' + best.label : '');
    if (best && inp.wasPressed('KeyE')) best.act();
  }
  lockUI(fn) { this.uiOpen = true; fn(() => { this.uiOpen = false; this.skip = 3; }); }
  pickItem(it) {
    const st = this.st, au = this.app.audio, t = it.d.type;
    const take = () => { st.taken.push(it.d.id); this.scene.remove(it.m); this.items.splice(this.items.indexOf(it), 1); };
    if (t === 'doc') {
      take(); au.pickup(); if (!st.docs.includes(it.d.doc)) st.docs.push(it.d.doc);
      const meta = this.app.saves.meta(); if (!meta.docs.includes(it.d.doc)) { meta.docs.push(it.d.doc); this.app.saves.setMeta(meta); }
      this.lockUI((done) => readDocument(this.app, it.d.doc, done)); return;
    }
    if (t === 'crystal') { take(); st.crystals++; au.crystal(); this.hud.toast(`Purple crystal (${st.crystals}/${TOTAL_CRYSTALS})`); return; }
    if (t === 'ammo') { take(); st.ammo += it.d.qty || 3; au.pickup(); this.hud.toast(`+${it.d.qty || 3} ammo`); return; }
    if (!st.inv.canAdd(t)) { this.hud.toast('Inventory full.'); au.locked(); return; }
    st.inv.add(t); take(); au.pickup(); this.hud.toast('Picked up ' + ITEMS[t].name);
  }
  useDoor(d) {
    const st = this.st, def = d.def, au = this.app.audio, f = st.flags;
    if (d.target > 0.5) { d.setOpen(false); au.door(); return; }
    const deny = (m) => { au.locked(); this.hud.toast(m || def.lockedMsg || 'Locked.'); };
    if (def.id === 'front' && f.sealed) return deny();
    if (def.id === 'cellar' && f.cellar_sealed) return deny('It will not open anymore.');
    if (def.lockFlag && !f[def.lockFlag]) return deny();
    if (def.lock && !f['unlocked_' + def.id]) { if (st.inv.has(def.lock)) { f['unlocked_' + def.id] = true; st.inv.remove(def.lock); this.hud.toast('Unlocked with the ' + ITEMS[def.lock].name + '.'); } else return deny(); }
    d.setOpen(true); au.door();
  }
  useSave() {
    const pl = this.player, st = this.st; this.app.audio.tape();
    st.checkpoint = { x: pl.x, z: pl.z, ry: pl.ry };
    this.lockUI((done) => slotPicker(this.app, 'save', (id) => { this.saveTo(id); done(); }, done));
  }
  enterHide(k) {
    const pl = this.player; pl.hidden = true; pl.setPos(k.x, k.z); pl.group.visible = false; pl.spot.visible = false; this.app.audio.door(); this.hud.toast('Hiding... hold still.'); this.hiddenT = 0; this.hideSpot = k;
  }
  exitHide() {
    const pl = this.player, k = this.hideSpot; pl.hidden = false; pl.group.visible = true; pl.setPos(k.fx, k.fz); pl.setLight(this.st.light && this.st.battery > 0); this.app.audio.door(); this.skip = 1;
  }
  codeLock(title, code, hint, onSolve) {
    this.lockUI((done) => {
      const m = modal(this.app, title, { onClose: done }); const dg = [0, 0, 0];
      const dial = h('div', 'dial');
      for (let i = 0; i < 3; i++) {
        const c = h('div'), up = h('button', 'btn', '▲'), sp = h('span', '', '0'), dn = h('button', 'btn', '▼');
        up.onclick = () => { dg[i] = (dg[i] + 1) % 10; sp.textContent = dg[i]; this.app.audio.select(); }; dn.onclick = () => { dg[i] = (dg[i] + 9) % 10; sp.textContent = dg[i]; this.app.audio.select(); };
        c.append(up, sp, dn); dial.appendChild(c);
      }
      m.panel.appendChild(dial); const msg = h('div', 'small', hint); m.panel.appendChild(msg);
      const b = h('div', 'btns'), ok = h('button', 'btn', 'OPEN'), cl = h('button', 'btn', 'CLOSE'); b.append(cl, ok); m.panel.appendChild(b);
      cl.onclick = () => m.close();
      ok.onclick = () => { if (dg.join('') === code) { m.close(); onSolve(); } else { this.app.audio.locked(); msg.textContent = 'ERROR — wrong code.'; msg.style.color = '#ff6a6a'; } };
    });
  }
  useSafe() {
    const st = this.st, f = st.flags;
    if (f.safe_open) { this.hud.toast('The safe is empty.'); return; }
    this.codeLock('SAFE — 3 DIGITS', '417', 'Four... one... seven? Somebody wrote it down somewhere.', () => {
      f.safe_open = true; this.app.audio.crystal(); st.inv.add('cellar_key'); st.crystals++; st.ammo += 4; this.hud.toast('Safe opened: Iron Key, crystal, ammo.', 4);
    });
  }
  useStove() {
    const f = this.st.flags;
    if (f.cabinet) { this.hud.toast('The cabinet beside the stove is open.'); return; }
    this.codeLock('STOVE DIALS', '209', 'Three dials. Somebody here had a birthday...', () => { f.cabinet = true; this.revealReq('cabinet'); this.app.audio.door(); this.hud.toast('Click — the cabinet beside the stove opened.', 4); });
  }
  useLever() {
    const f = this.st.flags, au = this.app.audio;
    if (f.lab_open) { this.hud.toast('The lever is already pulled.'); return; }
    f.lab_open = true; this.world.lever.rod.rotation.z = -1; this.world.doors.labdoor.setOpen(true); au.door(); au.thump(); this.hud.toast('Stone grinds against stone... a hidden door opened.', 4);
  }
  useMachine() {
    const st = this.st, f = st.flags, n = st.inv.count('gear');
    if (f.machine) { this.hud.toast('The machine hums quietly.'); return; }
    if (n < 2) { this.app.audio.locked(); this.hud.toast(`The mechanism is missing brass gears (${n}/2).`, 3.5); return; }
    st.inv.remove('gear', 2); f.machine = true; this.revealReq('machine'); this.world.machine.core.material.color.setHex(0x60ff90); this.app.audio.crystal(); this.app.audio.thump();
    this.hud.toast('The vault opened! Crystals gleam inside.', 4);
  }
  usePanel() {
    const f = this.st.flags;
    if (f.secret) { this.hud.toast('The panel is already solved.'); return; }
    const sym = ['☾', '◉', 'Ψ', '▲'], cur = [3, 3, 3];
    this.lockUI((done) => {
      const m = modal(this.app, 'SYMBOL PANEL', { onClose: done }); const row = h('div', 'dial'); const spans = [];
      for (let i = 0; i < 3; i++) { const sp = h('span', '', sym[cur[i]]); sp.style.cursor = 'pointer'; sp.onclick = () => { cur[i] = (cur[i] + 1) % 4; sp.textContent = sym[cur[i]]; this.app.audio.select(); }; spans.push(sp); row.appendChild(sp); }
      m.panel.appendChild(row); const msg = h('div', 'small', 'Click a symbol to change it. Three slots, order matters.'); m.panel.appendChild(msg);
      const b = h('div', 'btns'), ok = h('button', 'btn', 'CONFIRM'), cl = h('button', 'btn', 'CLOSE'); b.append(cl, ok); m.panel.appendChild(b);
      cl.onclick = () => m.close();
      ok.onclick = () => {
        if (cur.join() === '0,1,2') { f.secret = true; this.world.doors.secret.setOpen(true); this.app.audio.door(); this.app.audio.crystal(); this.hud.toast('Something moved in the library...', 4); m.close(); }
        else { this.app.audio.locked(); msg.textContent = 'Nothing happens.'; msg.style.color = '#ff6a6a'; }
      };
    });
  }
  useAltar() {
    const st = this.st, ending = st.crystals >= 5 ? 'good' : 'bad';
    this.over = true; this.app.audio.stinger(); this.hud.fade(true);
    setTimeout(() => this.app.goto('ending', { ending, state: st, perfect: st.crystals >= TOTAL_CRYSTALS }), 1200);
  }
  openInventory(back) {
    this.lockUI((done) => openInventory(this.app, this.st, { onClose: () => { done(); back && back(); }, onUse: (id) => { const m = this.st.useItem(id); this.app.audio.pickup(); return m; } }));
  }
  resume() { this.paused = false; this.skip = 3; this.input.clear(); }

  exit() {
    this.pause.hide(true); this.input.dispose(); this.hud.dispose(); this.hud = null;
    this.app.audio.stopAmbient();
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
}
