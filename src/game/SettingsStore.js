// Persistent settings (localStorage) + graphics presets.
const KEY = 'tei_settings_v1';

export const PRESETS = {
  low:    { resolution: '240', renderScale: 1.0, pixelation: 1.0, textureQuality: 'low',    shadowQuality: 'off',    fog: 1.25, aa: false, fpsLimit: 30, crt: 0.9, distortion: 0.6 },
  medium: { resolution: '360', renderScale: 1.0, pixelation: 0.6, textureQuality: 'medium', shadowQuality: 'low',    fog: 1.0,  aa: false, fpsLimit: 60, crt: 0.7, distortion: 0.4 },
  high:   { resolution: '480', renderScale: 1.0, pixelation: 0.3, textureQuality: 'high',   shadowQuality: 'medium', fog: 0.85, aa: true,  fpsLimit: 60, crt: 0.5, distortion: 0.25 },
};

const DEFAULTS = {
  preset: 'medium', ...PRESETS.medium,
  brightness: 1.0, sensitivity: 1.0, fullscreen: false,
  master: 0.8, music: 0.6, sfx: 0.9, ambient: 0.7, mute: false,
};

export class SettingsStore {
  constructor() {
    this.data = { ...DEFAULTS };
    this.listeners = new Set();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) this.data = { ...DEFAULTS, ...JSON.parse(raw) };
    } catch (e) { console.warn('settings load failed', e); }
  }
  get(k) { return this.data[k]; }
  set(k, v) {
    if (this.data[k] === v) return;
    this.data[k] = v;
    if (k in PRESETS.low && k !== 'preset') this.data.preset = 'custom';
    this.commit(k);
  }
  applyPreset(name) {
    if (!PRESETS[name]) return;
    Object.assign(this.data, PRESETS[name], { preset: name });
    this.commit('preset');
  }
  commit(changed) {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* storage full / blocked */ }
    this.listeners.forEach((fn) => fn(changed, this.data));
  }
  onChange(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
}
