import * as THREE from 'three';
import { h, root } from '../ui/ui.js';

/** 01 — original 32-bit console boot homage (no real console logos or sounds). */
export class StartupScene {
  constructor(app) {
    this.app = app; this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(0x03020a);
    this.camera = new THREE.PerspectiveCamera(50, 1.6, 0.1, 50); this.camera.position.set(0, 0, 7);
    this.t = 0; this.done = false; this.booted = false;
  }
  enter() {
    const a = this.app.audio;
    this.group = new THREE.Group(); this.scene.add(this.group);
    const wire = (s, c) => { const m = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(s, s, s)), new THREE.LineBasicMaterial({ color: c })); this.group.add(m); return m; };
    this.cubes = [wire(1.2, 0xa64dff), wire(2, 0x4a7aff), wire(2.8, 0x7a2fd0)];
    this.core = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), new THREE.MeshLambertMaterial({ color: 0xc58bff, flatShading: true, emissive: 0x5a1fa0 })); this.group.add(this.core);
    const l1 = new THREE.PointLight(0x8a3be0, 3, 14); l1.position.set(3, 2, 4); const l2 = new THREE.PointLight(0x2a5aff, 3, 14); l2.position.set(-3, -2, 4);
    this.scene.add(l1, l2, new THREE.AmbientLight(0x221a44, 1.2)); this.l1 = l1; this.l2 = l2;
    this.ui = h('div', 'full'); this.ui.style.pointerEvents = 'none';
    this.ui.innerHTML = '<div class="px big" id="su-t" style="margin-top:42vh;color:#c8b4ff;opacity:0;letter-spacing:10px">LDE·32</div><div class="small px" id="su-s" style="opacity:0;margin-top:8px">NOW STARTING SYSTEM...</div><div class="loadbar" id="su-b" style="opacity:0"><div></div></div>';
    root().appendChild(this.ui); this.tt = this.ui.querySelector('#su-t'); this.ts = this.ui.querySelector('#su-s'); this.tb = this.ui.querySelector('#su-b');
    this.keyH = (e) => { if (['Enter', 'Space', 'Escape'].includes(e.code)) this.finish(); }; document.addEventListener('keydown', this.keyH);
    this.ui.style.pointerEvents = 'auto'; this.ui.onclick = () => this.finish();
    a.boot();
  }
  finish() { if (this.done) return; this.done = true; this.app.goto('menu'); }
  update(dt) {
    this.t += dt; const t = this.t, f = (x, a, b) => Math.min(1, Math.max(0, (x - a) / (b - a)));
    this.group.rotation.y = t * 0.9; this.group.rotation.x = Math.sin(t * 0.7) * 0.4;
    this.cubes.forEach((c, i) => { const s = f(t, 0.3 + i * 0.35, 1.6 + i * 0.35); c.scale.setScalar(0.2 + 0.8 * s); c.rotation.y = t * (i + 1) * 0.4; c.rotation.z = t * (3 - i) * 0.25; });
    this.core.rotation.x = t * 1.5; this.core.rotation.y = t; this.core.scale.setScalar(0.5 + 0.5 * f(t, 0.2, 1.2) + Math.sin(t * 5) * 0.04);
    this.l1.intensity = 2.5 + Math.sin(t * 3) * 1.2; this.l2.intensity = 2.5 + Math.cos(t * 2.4) * 1.2;
    // CRT-style horizontal glitch of the whole stage for the first moments
    const stage = document.getElementById('stage'); stage.style.transform = t < 1.2 ? `translateX(${(Math.random() - 0.5) * 14 * (1.2 - t)}px)` : '';
    this.tt.style.opacity = f(t, 1.4, 2.4); this.ts.style.opacity = f(t, 2.2, 3); this.tb.style.opacity = f(t, 2.4, 3);
    this.tb.firstChild.style.width = Math.floor(f(t, 2.6, 6.2) * 20) * 5 + '%';
    if (t > 6.6) { stage.style.transform = ''; this.finish(); }
  }
  exit() { document.removeEventListener('keydown', this.keyH); document.getElementById('stage').style.transform = ''; this.ui.remove(); }
}
