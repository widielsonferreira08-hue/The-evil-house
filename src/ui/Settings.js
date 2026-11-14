import { h, modal } from './ui.js';
import { PRESETS } from '../game/SettingsStore.js';

const sel = (opts) => opts.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');

export function openSettings(app, onClose) {
  const S = app.settings;
  const m = modal(app, 'SETTINGS', { onClose });
  const tabs = h('div', 'tabs'), body = h('div'); m.panel.append(tabs, body);
  let tab = 'gfx';
  const row = (label, ctrl) => { const r = h('div', 'row'); r.appendChild(h('label', '', label)); r.appendChild(ctrl); return r; };
  const range = (key, min, max, step, fmt = (v) => v.toFixed(2)) => {
    const w = h('div'); w.style.cssText = 'display:flex;gap:8px;align-items:center';
    const i = h('input'); i.type = 'range'; i.min = min; i.max = max; i.step = step; i.value = S.get(key);
    const v = h('span', 'val', fmt(+i.value));
    i.oninput = () => { S.set(key, +i.value); v.textContent = fmt(+i.value); };
    i.onchange = () => app.audio.select();
    w.append(i, v); return w;
  };
  const select = (key, opts, parse = (x) => x) => { const s = h('select', '', sel(opts)); s.value = String(S.get(key)); s.onchange = () => { S.set(key, parse(s.value)); app.audio.select(); }; return s; };
  const check = (key) => { const c = h('input'); c.type = 'checkbox'; c.checked = !!S.get(key); c.onchange = () => { S.set(key, c.checked); app.audio.select(); }; return c; };
  const pct = (v) => Math.round(v * 100) + '%';

  function render() {
    tabs.innerHTML = ''; body.innerHTML = '';
    [['gfx', 'GRAPHICS'], ['aud', 'AUDIO'], ['ctl', 'CONTROLS']].forEach(([id, l]) => {
      const t = h('div', 'tab' + (tab === id ? ' on' : ''), l); t.onclick = () => { tab = id; app.audio.select(); render(); }; tabs.appendChild(t);
    });
    if (tab === 'gfx') {
      const p = h('select', '', sel([['low', 'LOW — authentic PS1'], ['medium', 'MEDIUM'], ['high', 'HIGH'], ['custom', 'CUSTOM']]));
      p.value = S.get('preset'); p.onchange = () => { if (PRESETS[p.value]) { S.applyPreset(p.value); app.audio.confirm(); render(); } };
      body.appendChild(row('Preset', p));
      body.appendChild(row('Internal resolution', select('resolution', [['native', 'Native'], ['480', '480p'], ['360', '360p'], ['240', '240p (PS1)']])));
      body.appendChild(row('Render scale', range('renderScale', 0.5, 1.5, 0.05, pct)));
      body.appendChild(row('Pixelation / vertex jitter', range('pixelation', 0, 1, 0.05, pct)));
      body.appendChild(row('Texture quality', select('textureQuality', [['low', 'Low (32px)'], ['medium', 'Medium (64px)'], ['high', 'High (128px)']])));
      body.appendChild(row('Shadow quality', select('shadowQuality', [['off', 'Off'], ['low', 'Low'], ['medium', 'Medium']])));
      body.appendChild(row('Fog intensity', range('fog', 0.4, 1.8, 0.05, pct)));
      body.appendChild(row('Anti-aliasing', check('aa')));
      body.appendChild(row('Frame limit', select('fpsLimit', [[30, '30 FPS (PS1)'], [60, '60 FPS'], [0, 'Unlimited']], (x) => +x)));
      body.appendChild(row('Fullscreen', check('fullscreen')));
      body.appendChild(row('CRT filter', range('crt', 0, 1, 0.05, pct)));
      body.appendChild(row('Screen distortion', range('distortion', 0, 1, 0.05, pct)));
      body.appendChild(row('Brightness', range('brightness', 0.6, 1.6, 0.05, pct)));
    } else if (tab === 'aud') {
      body.appendChild(row('Master volume', range('master', 0, 1, 0.05, pct)));
      body.appendChild(row('Music volume', range('music', 0, 1, 0.05, pct)));
      body.appendChild(row('Sound effects volume', range('sfx', 0, 1, 0.05, pct)));
      body.appendChild(row('Ambient volume', range('ambient', 0, 1, 0.05, pct)));
      body.appendChild(row('Mute all', check('mute')));
    } else {
      body.appendChild(row('Camera sensitivity', range('sensitivity', 0.3, 2, 0.05, pct)));
      const k = h('div', 'small'); k.style.cssText = 'line-height:1.8;margin-top:10px';
      k.innerHTML = 'W A S D — move &nbsp; SHIFT — run<br>E — interact / confirm &nbsp; F — flashlight<br>SPACE / LEFT CLICK — fire flash pistol<br>I — inventory &nbsp; ESC — pause<br>← → or mouse drag — rotate camera (free-camera areas)<br>Fixed-camera rooms keep your direction until you release the keys.';
      body.appendChild(k);
    }
    const b = h('div', 'btns'); const back = h('button', 'btn', 'BACK'); back.onclick = () => { app.audio.back(); m.close(); }; b.appendChild(back); body.appendChild(b);
  }
  render();
  return m;
}
