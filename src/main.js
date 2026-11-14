import './styles/style.css';
import * as THREE from 'three';
import { SettingsStore } from './game/SettingsStore.js';
import { SaveSystem } from './game/SaveSystem.js';
import { AudioManager } from './audio/AudioManager.js';
import { Engine } from './game/Engine.js';
import { h, root } from './ui/ui.js';
import { IntroScene } from './scenes/IntroScene.js';
import { StartupScene } from './scenes/StartupScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { MansionScene } from './scenes/MansionScene.js';
import { EndingScene } from './scenes/EndingScene.js';

const SCENES = { intro: IntroScene, startup: StartupScene, menu: MenuScene, game: MansionScene, ending: EndingScene };
const PRELOAD = ['lost-disc-logo.jpg', 'willow-portrait.png', 'willow-sheet.jpg', 'willow-selfie.jpg', 'gameplay-refs.jpg', 'cover-forgotten.jpg', 'cover-cursed-memories.jpg'];

function webglOk() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } }

const app = {
  settings: new SettingsStore(), saves: new SaveSystem(), current: null,
  fatal(e) {
    console.error(e);
    if (document.getElementById('fatal')) return;
    const o = h('div', 'full black'); o.id = 'fatal'; o.style.zIndex = 99;
    o.innerHTML = `<div class="px mid" style="color:#b3122e">SOMETHING WENT WRONG</div><div class="small" style="max-width:80vw;margin:12px">${String(e && e.message || e)}</div>`;
    const b = h('button', 'btn', 'RELOAD'); b.onclick = () => location.reload(); o.appendChild(b); root().appendChild(o);
  },
  stopAll() { this.audio.stopMusic(); this.audio.stopAmbient(); },
  goto(name, params = {}) {
    if (this.current && this.current.exit) { try { this.current.exit(); } catch (e) { console.warn(e); } }
    root().innerHTML = '';
    document.getElementById('stage').style.transform = '';
    const s = new SCENES[name](this); this.current = s; this.engine.setScene(s);
    s.enter(params);
  },
};
app.audio = new AudioManager(app.settings);

async function boot() {
  const ui = root();
  if (!webglOk()) { app.fatal(new Error('WebGL is not available in this browser. Try a recent Chrome, Edge or Firefox on desktop.')); return; }
  app.engine = new Engine(app, document.getElementById('stage'));
  app.engine.start();
  window.addEventListener('error', (e) => app.fatal(e.error || e.message));
  window.addEventListener('unhandledrejection', (e) => app.fatal(e.reason));
  const screen = h('div', 'full black');
  screen.innerHTML = '<div class="px mid" style="color:#a64dff;letter-spacing:6px">THE EVIL HOUSE</div><div class="small px" style="margin-top:6px">LOADING...</div><div class="loadbar"><div></div></div><div class="small blink" id="go" style="margin-top:22px;opacity:0">PRESS ANY KEY OR CLICK TO START</div><div class="small" style="margin-top:30px;max-width:80vw">Best played with headphones, in the dark, in fullscreen.</div>';
  ui.appendChild(screen);
  const bar = screen.querySelector('.loadbar>div'); let n = 0;
  await Promise.all(PRELOAD.map((f) => new Promise((res) => { const i = new Image(); i.onload = i.onerror = () => { n++; bar.style.width = (n / PRELOAD.length) * 100 + '%'; res(); }; i.src = 'images/' + f; })));
  screen.querySelector('#go').style.opacity = 1;
  const start = () => {
    window.removeEventListener('keydown', start); screen.removeEventListener('click', start);
    app.audio.init();
    app.goto(new URLSearchParams(location.search).has('skip') ? 'menu' : 'intro');
  };
  window.addEventListener('keydown', start); screen.addEventListener('click', start);
}
boot().catch((e) => app.fatal(e));
