import * as THREE from 'three';
import { buildFox } from '../entities/Willow.js';
import { lambert, basic, surf, solid, glow } from '../environments/Retro.js';
import * as P from '../environments/Props.js';
import { MainMenuUI } from '../ui/Menu.js';
import { GameState } from '../game/Game.js';

/** 02 — animated title screen: night mansion + Willow with her flashlight. */
export class MenuScene {
  constructor(app) {
    this.app = app; this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(48, 1.6, 0.1, 200);
    this.scene.background = new THREE.Color(0x0b0818); this.scene.fog = new THREE.FogExp2(0x0b0818, 0.028);
    this.t = 0; this.windows = [];
  }
  enter() {
    const app = this.app, sc = this.scene;
    sc.add(new THREE.AmbientLight(0x3a3060, 1.1));
    const moon = new THREE.DirectionalLight(0x8090ff, 1.2); moon.position.set(-10, 20, 10); sc.add(moon);
    sc.add(P.plane(200, 200, surf('grass', 0x555566), 0, 0, 0, 'up', 4));
    const brick = surf('brick', 0x6a5a66), roof = solid(0x120e1e);
    const add = (o, x, y, z) => { o.position.set(x, y, z); sc.add(o); return o; };
    add(P.box(26, 11, 8, brick, 0, 0, 0, 3), 6, 5.5, -22);
    const r = add(new THREE.Mesh(new THREE.ConeGeometry(15, 6, 4), roof), 6, 14, -22); r.rotation.y = Math.PI / 4; r.scale.set(1.4, 1, 0.6);
    add(P.box(5, 10, 5, brick, 0, 0, 0, 3), 6, 16, -23); const tr = add(new THREE.Mesh(new THREE.ConeGeometry(4, 5, 4), roof), 6, 23.5, -23); tr.rotation.y = Math.PI / 4;
    add(P.box(7, 8, 6, brick, 0, 0, 0, 3), -10, 4, -20); add(P.box(7, 8, 6, brick, 0, 0, 0, 3), 22, 4, -20);
    const wm = [];
    for (const [x, y] of [[-3, 3], [1, 3], [11, 3], [15, 3], [-3, 8], [1, 8], [11, 8], [15, 8], [6, 17.5], [-10, 5], [22, 5]]) {
      const w = P.windowGlow(1.1, 1.8, 0xc88030); w.position.set(x, y, -17.9); sc.add(w); this.windows.push(w);
    }
    this.silhouette = add(P.box(0.5, 1.1, 0.1, solid(0x000000), 0, 0, 0), 6, 17.2, -17.8);
    const door = P.windowGlow(2, 3, 0x6a3a18); door.position.set(6, 1.6, -17.9); sc.add(door);
    for (let i = 0; i < 7; i++) { const t = P.tree(9 + i % 3, i); t.position.set(-22 + i * 8 + (i % 2) * 3, 0, -10 - (i % 3) * 5); sc.add(t); }
    // fence + path
    for (let i = 0; i < 20; i++) add(P.box(0.08, 2.4, 0.08, surf('iron'), 0, 0, 0), -10 + i * 1.1, 1.2, -9);
    add(P.plane(3, 20, surf('stone', 0x777788), 0, 0, 0, 'up', 2), 6, 0.02, -8);
    // moon + fog sheets
    const moonM = add(new THREE.Mesh(new THREE.IcosahedronGeometry(3, 1), new THREE.MeshBasicMaterial({ color: 0xe0d8ff, fog: false })), -22, 24, -60);
    this.fogs = [];
    for (let i = 0; i < 5; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 4), new THREE.MeshBasicMaterial({ color: 0x8a80b0, transparent: true, opacity: 0.1, depthWrite: false })); m.position.set(-20 + i * 9, 1.4, -4 - i * 2); m.userData.s = 0.25 + i * 0.07; sc.add(m); this.fogs.push(m); }
    // Willow in the foreground
    this.fox = buildFox(); this.fox.group.position.set(-2.4, 0, 3); this.fox.group.rotation.y = 0.6; sc.add(this.fox.group);
    this.fox.parts.armR.rotation.set(-1.45, 0, -0.35); this.fox.setAnim('idle');
    const beam = new THREE.SpotLight(0xfff0c8, 3.5, 30, 0.5, 0.6, 1); beam.position.set(-3.2, 1.7, 3.6); beam.target.position.set(-6, 0.5, -3); sc.add(beam, beam.target);
    const rim = new THREE.PointLight(0xa040ff, 1.2, 12); rim.position.set(0.5, 3, 4); sc.add(rim);
    this.camera.position.set(1.5, 2.1, 8.5);
    // UI
    this.ui = new MainMenuUI(app, {
      onNew: () => { app.audio.stopMusic(); app.goto('game', { state: new GameState(), intro: true }); },
      onContinue: () => this.load(app.saves.last()), onLoad: (id) => this.load(id),
    });
    app.audio.startMusic('menu'); app.audio.stopAmbient(); app.audio.startAmbient();
  }
  load(id) {
    const d = id && this.app.saves.load(id);
    if (!d) { this.app.audio.locked(); return; }
    this.app.audio.stopMusic(); this.app.goto('game', { state: GameState.from(d) });
  }
  update(dt, time) {
    this.t += dt; const t = this.t;
    this.camera.position.x = 1.5 + Math.sin(t * 0.18) * 0.9; this.camera.position.y = 2.1 + Math.sin(t * 0.13) * 0.15;
    this.camera.lookAt(-0.5, 2.6, -2);
    this.fox.update(dt); this.fox.parts.armR.rotation.x = -1.45 + Math.sin(t * 1.1) * 0.03;
    this.fogs.forEach((m) => { m.position.x += dt * m.userData.s; if (m.position.x > 28) m.position.x = -28; });
    this.windows.forEach((w, i) => { w.visible = !(Math.sin(t * (1.3 + i * 0.37) + i * 5) > 0.97) ; });
    this.silhouette.visible = Math.sin(t * 0.35) > 0.6;
    const S = this.app.settings; this.scene.fog.density = 0.028 * S.get('fog');
  }
  exit() { this.ui.dispose(); }
}
