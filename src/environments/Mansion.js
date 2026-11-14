import * as THREE from 'three';
import { ROOMS, WALLS, DOORS, H, T, DOOR_H, WARDROBES, SAVEPOINTS, SAFE, SYMBOL_PANEL, ALTAR, PILLARS } from './Rooms.js';
import { surf, solid, glow, basic } from './Retro.js';
import * as P from './Props.js';

const rect = (x1, x2, z1, z2) => ({ cx: (x1 + x2) / 2, cz: (z1 + z2) / 2, w: x2 - x1, d: z2 - z1 });

/** Builds all static geometry + colliders for chapter 1 and returns handles for gameplay code. */
export function buildMansion(scene, col) {
  const world = { rooms: ROOMS, doors: {}, wardrobes: [], saves: [], anim: [], flames: [] };
  const put = (obj, x, y, z, ry = 0) => { obj.position.set(x, y, z); obj.rotation.y = ry; scene.add(obj); return obj; };
  const blk = (x, z, w, d, sight = false) => col.add(x - w / 2, x + w / 2, z - d / 2, z + d / 2, { sight });
  const flame = (c) => { world.flames.push(c.userData.flame); return c; };

  // ---------- ground, sky ----------
  const ground = P.plane(300, 300, surf('grass', 0x607060), 0, -0.02, 0, 'up', 4); scene.add(ground);
  const stars = new THREE.BufferGeometry(); const sp = [];
  for (let i = 0; i < 260; i++) { const a = Math.random() * Math.PI * 2, e = 0.15 + Math.random() * 1.2, r = 150; sp.push(Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r, Math.sin(a) * Math.cos(e) * r); }
  stars.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const starPts = new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xd8d0ff, size: 1.3, sizeAttenuation: false, fog: false })); scene.add(starPts);
  const moon = new THREE.Mesh(new THREE.IcosahedronGeometry(7, 1), new THREE.MeshBasicMaterial({ color: 0xe0d8ff, fog: false })); moon.position.set(-60, 70, 110); scene.add(moon);
  world.sky = [starPts, moon];

  // ---------- floors / ceilings ----------
  const floorTex = { garden: ['grass', 3], hall: ['wood', 3], corridor: ['wood', 3], library: ['wood', 3], office: ['wood', 3], cellar: ['tile', 3] };
  for (const r of ROOMS) {
    const q = rect(r.x1, r.x2, r.z1, r.z2), [tn, ts] = floorTex[r.id];
    const f = P.plane(q.w, q.d, surf(tn, r.id === 'garden' ? 0xffffff : 0xdddddd), q.cx, 0, q.cz, 'up', ts); f.receiveShadow = true; scene.add(f);
    if (!r.outdoor) scene.add(P.plane(q.w, q.d, surf('plaster'), q.cx, H, q.cz, 'down', 3));
  }
  scene.add(P.plane(3, 24, surf('stone', 0xaaaaaa), 0, 0.02, 28, 'up', 2));
  scene.add(P.plane(3.2, 15.4, surf('carpet'), 0, 0.02, 8, 'up', 2));
  scene.add(P.plane(15.6, 1.8, surf('carpet'), 17, 0.02, 8, 'up', 2));
  scene.add(P.plane(7, 5, surf('carpet', 0xcc9999), 33, 0.02, 8, 'up', 2));
  scene.add(P.plane(6, 4.6, surf('carpet', 0x99aacc), -17, 0.02, 8, 'up', 2));

  // ---------- walls ----------
  const top = surf('plaster');
  for (const w of WALLS) {
    const gaps = (w.gaps || []).map((g) => ({ a: g.at - g.w / 2, b: g.at + g.w / 2 })).sort((p, q) => p.a - q.a);
    const segs = []; let cur = w.a;
    for (const g of gaps) { if (g.a > cur) segs.push([cur, g.a]); cur = g.b; }
    if (cur < w.b) segs.push([cur, w.b]);
    const pos = surf(w.pos), neg = surf(w.neg);
    const mats = w.axis === 'x' ? [top, top, top, top, pos, neg] : [pos, neg, top, top, top, top];
    for (const [a, b] of segs) {
      const len = b - a, mid = (a + b) / 2;
      const ea = a === w.a ? T / 2 : 0, eb = b === w.b ? T / 2 : 0;
      if (w.axis === 'x') { scene.add(P.box(len, H, T, mats, mid, H / 2, w.c, 3)); col.add(a - ea, b + eb, w.c - T / 2, w.c + T / 2); }
      else { scene.add(P.box(T, H, len, mats, w.c, H / 2, mid, 3)); col.add(w.c - T / 2, w.c + T / 2, a - ea, b + eb); }
    }
    for (const g of gaps) {
      const len = g.b - g.a, mid = (g.a + g.b) / 2, lh = H - DOOR_H;
      scene.add(w.axis === 'x' ? P.box(len, lh, T, mats, mid, DOOR_H + lh / 2, w.c, 3) : P.box(T, lh, len, mats, w.c, DOOR_H + lh / 2, mid, 3));
    }
  }

  // ---------- doors ----------
  for (const def of DOORS) {
    const hinge = def.at - def.w / 2, piv = new THREE.Group();
    if (def.axis === 'x') piv.position.set(hinge, 0, def.c); else piv.position.set(def.c, 0, hinge);
    let mesh;
    if (def.shelf) { mesh = P.bookshelf(def.w, DOOR_H, 0, 7); mesh.position.set(def.w / 2, 0, 0); }
    else {
      mesh = new THREE.Group();
      if (def.axis === 'x') { mesh.add(P.box(def.w - 0.06, DOOR_H, 0.16, surf('darkwood', 0xbbbbbb), def.w / 2, DOOR_H / 2, 0, 1.5)); mesh.add(P.box(0.12, 0.12, 0.3, solid(0xc8a030), def.w - 0.25, 1.2, 0)); }
      else { mesh.add(P.box(0.16, DOOR_H, def.w - 0.06, surf('darkwood', 0xbbbbbb), 0, DOOR_H / 2, def.w / 2, 1.5)); mesh.add(P.box(0.3, 0.12, 0.12, solid(0xc8a030), 0, 1.2, def.w - 0.25)); }
    }
    piv.add(mesh); scene.add(piv);
    const c = def.axis === 'x' ? col.add(def.at - def.w / 2, def.at + def.w / 2, def.c - 0.18, def.c + 0.18, { door: true }) : col.add(def.c - 0.18, def.c + 0.18, def.at - def.w / 2, def.at + def.w / 2, { door: true });
    const d = {
      def, piv, collider: c, open: 0, target: 0, sign: def.axis === 'x' ? -1 : 1,
      x: def.axis === 'x' ? def.at : def.c, z: def.axis === 'x' ? def.c : def.at,
      setOpen(b, snap) { this.target = b ? 1 : 0; if (snap) { this.open = this.target; this.apply(); } },
      apply() { this.piv.rotation.y = this.sign * this.open * 1.75; this.collider.enabled = this.open < 0.5; },
      update(dt) { if (Math.abs(this.target - this.open) > 0.001) { this.open += (this.target - this.open) * Math.min(1, dt * 4); this.apply(); } },
    };
    world.doors[def.id] = d;
  }

  // ---------- exterior shell ----------
  const brick = surf('brick', 0x998888, {}), roofM = solid(0x161320);
  scene.add(P.box(29, 6, 3, brick, 0, H + 3, 14.6, 3));
  const roof = new THREE.Mesh(new THREE.ConeGeometry(15, 6, 4), roofM); roof.rotation.y = Math.PI / 4; roof.scale.set(1.45, 1, 0.55); roof.position.set(0, H + 9, 8); scene.add(roof);
  scene.add(P.box(5, 9, 5, brick, 0, H + 4.5, 12, 3));
  const tr = new THREE.Mesh(new THREE.ConeGeometry(4.2, 4, 4), roofM); tr.rotation.y = Math.PI / 4; tr.position.set(0, H + 11, 12); scene.add(tr);
  const win = (x, y, z, ry, color) => put(P.windowGlow(1.1, 1.7, color), x, y, z, ry);
  for (const x of [-11, -7, 7, 11]) win(x, 2.6, 16.28, 0, 0xc88030);
  for (const x of [-11, -6, 6, 11]) win(x, 7.2, 16.12, 0, x % 2 ? 0xc07028 : 0x8a50c0);
  win(0, H + 6, 14.55, 0, 0xffd080);
  // gate pillars, fence
  const iron = surf('iron'), sideF = (x1, z1, x2, z2) => {
    const len = Math.hypot(x2 - x1, z2 - z1), n = Math.floor(len / 0.6);
    for (let i = 0; i <= n; i++) { const t = i / n, bar = P.box(0.07, 2.6, 0.07, iron, x1 + (x2 - x1) * t, 1.3, z1 + (z2 - z1) * t); scene.add(bar); const sp2 = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.25, 4), iron); sp2.position.set(bar.position.x, 2.72, bar.position.z); scene.add(sp2); }
    scene.add(P.box(Math.abs(x2 - x1) || 0.05, 0.08, Math.abs(z2 - z1) || 0.05, iron, (x1 + x2) / 2, 2.2, (z1 + z2) / 2));
    scene.add(P.box(Math.abs(x2 - x1) || 0.05, 0.08, Math.abs(z2 - z1) || 0.05, iron, (x1 + x2) / 2, 0.5, (z1 + z2) / 2));
  };
  sideF(-14, 16, -14, 40); sideF(14, 16, 14, 40); sideF(-14, 40, 14, 40);
  col.add(-14.2, -13.8, 16, 40.2, { sight: false }); col.add(13.8, 14.2, 16, 40.2, { sight: false }); col.add(-14, 14, 39.8, 40.2, { sight: false });
  for (const sx of [-2.4, 2.4]) { scene.add(P.box(1, 3.4, 1, surf('stone', 0x998899), sx, 1.7, 40)); const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 0), surf('stone', 0xaaaaaa)); ball.position.set(sx, 3.7, 40); scene.add(ball); }
  put(P.statue(Math.PI), -9.5, 0, 23); blk(-9.5, 23, 1.2, 1.2);
  put(P.statue(Math.PI), 9.5, 0, 23); blk(9.5, 23, 1.2, 1.2);
  for (let i = 0; i < 18; i++) { const side = i % 2 ? 1 : -1, z = 18 + (i >> 1) * 6 + Math.random() * 2; put(P.tree(5 + Math.random() * 3, i), side * (17 + Math.random() * 10), 0, z + Math.random() * 6); }
  for (let i = 0; i < 6; i++) put(P.tree(6, i + 20), -20 + i * 8, 0, 48 + Math.random() * 6);
  for (const [x, z] of [[-11, 27], [-8, 29], [8.5, 30], [11, 26.5], [-12, 20.5], [12, 33]]) { put(P.box(0.8, 1.2, 0.25, surf('stone', 0x888899), 0, 0, 0, 1), x, 0.6, z, (Math.random() - 0.5) * 0.4); blk(x, z, 0.9, 0.4); }

  // ---------- hall ----------
  const chand = put(P.chandelier(), 0, H - 1.2, 8); world.chandelier = chand; chand.children.forEach((c) => c.userData.flame && flame(c));
  for (const [x, z, ry, s] of [[-8.7, 3, Math.PI / 2, 1], [-8.7, 13, Math.PI / 2, 2], [8.7, 13, -Math.PI / 2, 3], [-4.5, 0.25, 0, 4], [4.5, 0.25, 0, 5]]) put(P.portrait(s), x, 2.7, z, ry);
  for (const sx of [-2.6, 2.6]) { put(P.table(0.9, 0.9, 0.8), sx, 0, 0.9); blk(sx, 0.9, 0.9, 0.9); flame(put(P.candle(0, 0, 0), sx, 0.88, 0.9)); }
  // decorative grand staircase
  for (let i = 0; i < 6; i++) scene.add(P.box(0.55, 0.3 * (i + 1), 2.8, surf('wood', 0x887766), 5.4 + i * 0.55, 0.15 * (i + 1), 4, 1.5));
  scene.add(P.box(0.15, 2.4, 2.9, surf('darkwood'), 5.1, 1.2, 4)); scene.add(P.box(0.25, 2.6, 2.9, surf('darkwood', 0x554433), 8.55, 3.0, 4)); col.add(4.9, 8.8, 2.5, 5.5, { sight: false });
  const rug = P.plane(2, 2, surf('carpet'), -2, 0.03, 9, 'up', 2); scene.add(rug);

  // ---------- corridor ----------
  for (const x of [13, 19, 22.5]) { flame(put(P.candle(0, 0, 0), x, 1.6, 6.8)); put(P.box(0.5, 0.06, 0.25, surf('darkwood'), 0, 0, 0), x, 1.45, 6.8); }
  for (const [x, z, ry, s] of [[14.5, 6.72, 0, 2], [20.5, 6.72, 0, 3], [16, 9.28, Math.PI, 4], [22, 9.28, Math.PI, 1]]) put(P.portrait(s, 0.9, 1.3), x, 2.5, z, ry);

  // ---------- library ----------
  for (const x of [27.5, 30.5, 33.5]) { put(P.bookshelf(3, 3.6, 0, x | 0), x, 0, 0.55); blk(x, 0.55, 3, 0.6, false); }
  for (const z of [3.2, 6, 11, 13.6]) if (z !== 6) { put(P.bookshelf(2.6, 3.6, Math.PI / 2, z * 3 | 0), 25.55, 0, z); blk(25.55, z, 0.6, 2.6); }
  for (const z of [6.2, 9.6, 12.2]) { put(P.bookshelf(2.8, 3.6, -Math.PI / 2, z | 0), 40.45, 0, z); blk(40.45, z, 0.6, 2.8); }
  put(P.table(2.6, 1.3), 33, 0, 8); blk(33, 8, 2.6, 1.3);
  put(P.chair(), 33, 0, 9.5, Math.PI); put(P.chair(), 31.4, 0, 8, -Math.PI / 2);
  flame(put(P.candle(0, 0, 0), 34, 0.9, 7.6));
  put(P.portrait(2, 1.2, 1.6), 33, 2.8, 15.72, Math.PI);
  // symbol panel
  const sc = document.createElement('canvas'); sc.width = 96; sc.height = 32; const sx = sc.getContext('2d'); sx.fillStyle = '#120a1c'; sx.fillRect(0, 0, 96, 32); sx.fillStyle = '#a64dff'; sx.font = '22px monospace'; sx.fillText('☾', 6, 24); sx.fillText('◉', 38, 24); sx.fillText('Ψ', 70, 24); sx.fillText('▲', 38, 8);
  const st = new THREE.CanvasTexture(sc); st.magFilter = st.minFilter = THREE.NearestFilter; st.colorSpace = THREE.SRGBColorSpace;
  const pan = new THREE.Group(); pan.add(P.box(1.8, 0.8, 0.1, surf('stone', 0x998899))); const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.5), basic({ map: st })); pl.position.z = 0.06; pan.add(pl); put(pan, SYMBOL_PANEL.x, 1.5, 15.7, Math.PI);
  world.panel = { x: SYMBOL_PANEL.x, z: 15.0 };
  // nook decor
  flame(put(P.candle(0, 0, 0), 37, 0.05, 1.0));

  // ---------- office ----------
  put(P.desk(2.4, 1.1), -20, 0, 3.4); blk(-20, 3.4, 2.4, 1.1);
  put(P.chair(), -20, 0, 4.7, Math.PI);
  for (const x of [-12.5, -15.5]) { put(P.bookshelf(3, 3.4, 0, x | 0), x, 0, 0.55); blk(x, 0.55, 3, 0.6); }
  put(P.table(1.6, 0.9, 0.7), -12.5, 0, 12); blk(-12.5, 12, 1.6, 0.9);
  flame(put(P.candle(0, 0, 0), -19.2, 1.0, 3.2));
  put(P.portrait(5, 1, 1.4), -17, 2.8, 0.25, 0);
  const sf = put(P.safeBox(SAFE.rot), SAFE.x, 0, SAFE.z); blk(SAFE.x, SAFE.z, 0.9, 0.9);
  world.safe = { x: SAFE.x + 0.6, z: SAFE.z, mesh: sf };

  // ---------- cellar ----------
  PILLARS.forEach(([x, z]) => { put(P.pillar(H), x, 0, z); col.add(x - 0.5, x + 0.5, z - 0.5, z + 0.5, { sight: true }); });
  const alt = put(P.altar(), ALTAR.x, 0, ALTAR.z); col.add(ALTAR.x - 1.5, ALTAR.x + 1.5, ALTAR.z - 1, ALTAR.z + 1, { sight: false });
  world.altar = { x: ALTAR.x, z: ALTAR.z + 1.8, disc: alt.userData.disc };
  const rune = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.05, 4, 16), glow(0x8a3be0)); rune.rotation.x = Math.PI / 2; rune.position.set(0, 0.05, -13.2); scene.add(rune);
  for (const [x, z] of [[-2.2, -16.5], [2.2, -16.5], [-3.5, -14], [3.5, -14]]) flame(put(P.candle(0, 0, 0), x, 0, z));

  // ---------- wardrobes & save points ----------
  for (const w of WARDROBES) {
    put(P.wardrobe(w.rot), w.x, 0, w.z);
    const sw = Math.abs(Math.sin(w.rot)) > 0.5; col.add(w.x - (sw ? 0.5 : 0.75), w.x + (sw ? 0.5 : 0.75), w.z - (sw ? 0.75 : 0.5), w.z + (sw ? 0.75 : 0.5), { sight: false });
    world.wardrobes.push({ ...w, fx: w.x + Math.sin(w.rot) * 1.4, fz: w.z + Math.cos(w.rot) * 1.4 });
  }
  for (const s of SAVEPOINTS) { const sv = put(P.savePoint(), s.x, 0, s.z); blk(s.x, s.z, 0.9, 0.6); world.saves.push({ ...s, ring: sv.userData.ring }); }

  world.update = (dt, t) => {
    Object.values(world.doors).forEach((d) => d.update(dt));
    world.flames.forEach((f, i) => { f.scale.set(1, 0.8 + Math.sin(t * 14 + i * 3) * 0.25 + Math.random() * 0.15, 1); });
    if (world.chandelier) world.chandelier.rotation.z = Math.sin(t * 0.7) * 0.025;
    world.saves.forEach((s) => { s.ring.rotation.z = t * 2; s.ring.position.y = 0.9 + Math.sin(t * 2) * 0.05; });
    if (world.altar.disc) { world.altar.disc.rotation.y = t * 1.5; world.altar.disc.position.y = 1.6 + Math.sin(t * 2) * 0.05; }
  };
  return world;
}
