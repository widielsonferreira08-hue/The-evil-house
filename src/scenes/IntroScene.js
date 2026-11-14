import * as THREE from 'three';
import { h, root } from '../ui/ui.js';

function noiseLayer() {
  const c = h('canvas'); c.width = 128; c.height = 96; c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;opacity:0';
  const x = c.getContext('2d'), img = x.createImageData(128, 96);
  c.draw = () => { for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; } x.putImageData(img, 0, 0); };
  return c;
}

/** 00 — THE LOST DISC ENTERTAINMENT studio intro (about 8 seconds). */
export class IntroScene {
  constructor(app) {
    this.app = app; this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(45, 1.6, 0.1, 50); this.camera.position.set(0, 0, 5.2);
    this.t = 0; this.fired = {}; this.done = false;
  }
  enter() {
    const app = this.app;
    this.tex = new THREE.TextureLoader().load('images/lost-disc-logo.jpg');
    this.tex.colorSpace = THREE.SRGBColorSpace; this.tex.magFilter = this.tex.minFilter = THREE.NearestFilter;
    this.mat = new THREE.MeshBasicMaterial({ map: this.tex, transparent: true, opacity: 0, color: 0x000000 });
    this.logo = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 3.6), this.mat); this.scene.add(this.logo);
    this.ui = h('div', 'full'); this.ui.style.pointerEvents = 'none';
    this.noise = noiseLayer(); this.cap = h('div', 'px mid', 'THE LOST DISC ENTERTAINMENT'); this.cap.style.cssText = 'position:absolute;bottom:12%;left:0;right:0;text-align:center;color:#b9a6d8;opacity:0;letter-spacing:6px';
    this.hint = h('div', 'small', 'ENTER — skip'); this.hint.style.cssText = 'position:absolute;right:14px;bottom:10px;opacity:.5';
    this.ui.append(this.noise, this.cap, this.hint); root().appendChild(this.ui);
    this.keyH = (e) => { if (this.t > 0.4 && ['Enter', 'Space', 'Escape'].includes(e.code)) this.finish(); };
    document.addEventListener('keydown', this.keyH); this.ui.style.pointerEvents = 'auto'; this.ui.onclick = () => this.t > 0.4 && this.finish();
    app.audio.stopMusic();
  }
  finish() { if (this.done) return; this.done = true; this.app.goto('startup'); }
  update(dt, time) {
    this.t += dt; const t = this.t, a = this.app.audio;
    const fade = (x, a0, a1) => Math.min(1, Math.max(0, (x - a0) / (a1 - a0)));
    // static noise: strong at first, fades out
    const n = 1 - fade(t, 0.2, 2.2) + (t > 6.6 ? fade(t, 6.6, 7.2) * 0.5 : 0);
    this.noise.style.opacity = (n * 0.55).toFixed(2); if (n > 0.01) this.noise.draw();
    if (t > 0.8 && !this.fired.tape) { this.fired.tape = 1; a.tape(); }
    this.cap.style.opacity = fade(t, 1.2, 2.6) * (1 - fade(t, 6.3, 7)); 
    if (t > 2.6 && !this.fired.thump) { this.fired.thump = 1; a.thump(); a.stinger(); }
    const emerge = fade(t, 2.6, 4.2), out = 1 - fade(t, 6.4, 7.4);
    this.mat.opacity = emerge * out;
    // coloured "lights": red/purple pulse tinting the logo while it slowly rotates
    const k = 0.5 + 0.5 * Math.sin(t * 2.2), tint = new THREE.Color().setRGB(0.55 + 0.45 * k, 0.4 + 0.2 * (1 - k), 0.7 + 0.3 * (1 - k)).multiplyScalar(emerge);
    this.mat.color.copy(tint);
    this.logo.rotation.y = Math.sin(t * 0.8) * 0.45; this.logo.rotation.x = Math.sin(t * 0.5) * 0.08;
    const s = 0.7 + 0.3 * emerge; this.logo.scale.setScalar(s); this.logo.position.y = 0.2;
    if (t > 7.6) this.finish();
  }
  exit() { document.removeEventListener('keydown', this.keyH); this.ui.remove(); this.tex.dispose(); this.mat.dispose(); }
}
