import * as THREE from 'three';
import { Tex, retroUniforms } from '../environments/Retro.js';

/** Owns the WebGL renderer, applies graphics settings, runs the main loop for the active scene. */
export class Engine {
  constructor(app, container) {
    this.app = app; this.container = container; this.scene = null; this.renderer = null;
    this.last = performance.now(); this.acc = 0; this.time = 0; this.running = false;
    this.makeRenderer();
    app.settings.onChange((k) => this.applySettings(k));
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('fullscreenchange', () => { const fs = !!document.fullscreenElement; if (app.settings.get('fullscreen') !== fs) app.settings.set('fullscreen', fs); });
    this.applySettings('all');
  }
  makeRenderer() {
    const old = this.renderer;
    this.renderer = new THREE.WebGLRenderer({ antialias: !!this.app.settings.get('aa'), powerPreference: 'high-performance' });
    this.renderer.useLegacyLights = true; // keeps classic (pre-r155) light intensities used by the scenes
    this.renderer.setClearColor(0x000000);
    this.renderer.shadowMap.type = THREE.BasicShadowMap;
    this.container.replaceChildren(this.renderer.domElement);
    if (old) old.dispose();
    this.resize();
  }
  resize() {
    const S = this.app.settings, w = this.container.clientWidth || window.innerWidth, h = this.container.clientHeight || window.innerHeight;
    const res = S.get('resolution'), scale = S.get('renderScale');
    const ih = Math.max(120, Math.round((res === 'native' ? h : parseInt(res, 10)) * scale));
    const iw = Math.round(ih * (w / h));
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(iw, ih, false);
    if (this.scene && this.scene.camera) { this.scene.camera.aspect = w / h; this.scene.camera.updateProjectionMatrix(); }
  }
  applySettings(k) {
    const S = this.app.settings, st = document.documentElement.style;
    if (k === 'aa' || k === 'preset') { if (this.renderer.capabilities && this.app.settings.get('aa') !== this.renderer.getContext().getContextAttributes().antialias) this.makeRenderer(); }
    st.setProperty('--crt', S.get('crt')); st.setProperty('--distort', S.get('distortion')); st.setProperty('--bright', S.get('brightness'));
    Tex.setQuality(S.get('textureQuality'));
    const pix = S.get('pixelation'); retroUniforms.uSnap.value = pix < 0.02 ? 0 : Math.round(480 - pix * 370);
    const sh = S.get('shadowQuality') !== 'off';
    if (this.renderer.shadowMap.enabled !== sh) { this.renderer.shadowMap.enabled = sh; if (this.scene) this.scene.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); }); }
    if (S.get('fullscreen') && !document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    if (!S.get('fullscreen') && document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    this.resize();
    if (this.scene && this.scene.onSettings) this.scene.onSettings(k);
  }
  setScene(s) { this.scene = s; this.resize(); }
  start() { if (this.running) return; this.running = true; requestAnimationFrame((t) => this.loop(t)); }
  loop(ts) {
    requestAnimationFrame((t) => this.loop(t));
    const dt = Math.min(0.1, (ts - this.last) / 1000); this.last = ts; this.acc += dt;
    const lim = this.app.settings.get('fpsLimit');
    if (lim > 0 && this.acc < 1 / lim - 0.002) return;
    const step = Math.min(this.acc, 0.05); this.acc = 0; this.time += step;
    if (this.scene) {
      try { this.scene.update(step, this.time); this.renderer.render(this.scene.scene, this.scene.camera); }
      catch (e) { this.app.fatal(e); }
    }
  }
}
