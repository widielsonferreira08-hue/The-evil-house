import { h, root, MenuList, modal, confirmDialog, slotPicker } from './ui.js';
import { openSettings } from './Settings.js';
import { DOCS } from '../environments/Rooms.js';

export class MainMenuUI {
  constructor(app, { onNew, onContinue, onLoad }) {
    this.app = app;
    this.el = h('div', 'full'); this.el.style.pointerEvents = 'none';
    this.el.innerHTML = '<div class="title"><h1 class="px">THE EVIL HOUSE</h1><h2 class="px">CURSED MEMORIES</h2></div><div class="studio">© THE LOST DISC ENTERTAINMENT — SLUS-00666 — Press ENTER</div>';
    root().appendChild(this.el);
    const sub = (fn) => { this.menu.detach(); this.el.style.display = 'none'; fn(() => { this.el.style.display = ''; this.menu.attach(); }); };
    const hasSave = app.saves.anySave();
    this.menu = new MenuList(app, [
      { label: 'NEW GAME', action: () => { if (hasSave) sub((back) => confirmDialog(app, 'You already have saved progress. Start a NEW GAME anyway?', () => onNew(), back)); else onNew(); } },
      { label: 'CONTINUE', disabled: !hasSave, action: () => onContinue() },
      { label: 'LOAD GAME', action: () => sub((back) => slotPicker(app, 'load', (id) => onLoad(id), back)) },
      { label: 'SETTINGS', action: () => sub((back) => openSettings(app, back)) },
      { label: 'EXTRAS', action: () => sub((back) => openExtras(app, back)) },
      { label: 'CREDITS', action: () => { this.menu.detach(); this.el.style.display = 'none'; openCredits(app, () => { this.el.style.display = ''; this.menu.attach(); }); } },
      { label: 'EXIT GAME', action: () => sub((back) => exitScreen(app, back)) },
    ], { className: 'menu' });
    this.menu.el.style.pointerEvents = 'auto'; this.el.appendChild(this.menu.el); this.menu.attach();
  }
  dispose() { this.menu.detach(); this.el.remove(); }
}

function exitScreen(app, back) {
  const o = h('div', 'full black'); o.style.zIndex = 50;
  o.innerHTML = '<div class="mid px" style="color:#a64dff">IT IS NOW SAFE TO CLOSE THIS TAB.</div><div class="small" style="margin-top:14px">(Browsers do not allow a page to close itself — the game has stopped.)</div>';
  const b = h('button', 'btn', 'BACK TO TITLE'); b.style.marginTop = '24px'; o.appendChild(b); root().appendChild(o);
  app.audio.stopMusic(); app.audio.stopAmbient(); try { window.close(); } catch (e) { /* ignored */ }
  const done = () => { o.remove(); back(); };
  b.onclick = done;
}

export function openExtras(app, onClose) {
  const meta = app.saves.meta();
  const m = modal(app, 'EXTRAS', { onClose });
  const tabs = h('div', 'tabs'), body = h('div'); m.panel.append(tabs, body);
  const I = (f) => `images/${f}`;
  const tabsDef = ['CHARACTERS', 'ENEMIES', 'ARTWORK', 'INFO', 'SECRET FILES', 'ENDINGS'];
  let tab = 0;
  const view = (src) => { const v = modal(app, null, {}); const img = h('img', 'big-img'); img.src = src; v.panel.appendChild(img); v.panel.style.padding = '8px'; };
  const gal = (list) => { const g = h('div', 'gal'); list.forEach(([f, label]) => { const i = h('img'); i.src = I(f); i.title = label; i.onclick = () => view(I(f)); g.appendChild(i); }); return g; };
  function render() {
    tabs.innerHTML = ''; body.innerHTML = '';
    tabsDef.forEach((t, i) => { const e = h('div', 'tab' + (i === tab ? ' on' : ''), t); e.onclick = () => { tab = i; app.audio.select(); render(); }; tabs.appendChild(e); });
    if (tab === 0) { body.appendChild(gal([['willow-sheet.jpg', 'Willow — model sheet'], ['willow-selfie.jpg', 'Willow — selfie']])); body.appendChild(h('p', 'small', '<br><b style="color:var(--orange)">WILLOW</b> — an anthropomorphic fox with a spiked beanie, a skeleton hoodie and a lot of questions. She carries a flashlight and a flash pistol. She does not remember how she got here.')); }
    else if (tab === 1) {
      body.appendChild(gal([['gameplay-refs.jpg', 'Enemy encounters']]));
      body.appendChild(h('div', 'small', '<br><b style="color:var(--orange)">THE WATCHER</b> — tall, dark, glowing eyes. Patrols the mansion. Hide in wardrobes; it cannot be killed, only stunned.<br><br><b style="color:var(--orange)">THE CRAWLERS</b> — small things that skitter in the library. One spark is enough.<br><br><b style="color:var(--orange)">THE POSSESSED FOX</b> — purple spiral eyes, sharp smile. It wears her face.<br><br><b style="color:var(--orange)">THE SHADOWS</b> — stalk the dark rooms (kitchen, guest rooms, laboratory). Light makes them dissolve.'));
    } else if (tab === 2) body.appendChild(gal([['cover-forgotten.jpg', 'Cover — Some houses should stay forgotten'], ['cover-cursed-memories.jpg', 'Cover — Cursed Memories'], ['lost-disc-logo.jpg', 'The Lost Disc Entertainment'], ['willow-selfie.jpg', 'Selfie'], ['gameplay-refs.jpg', 'Gameplay references']]));
    else if (tab === 3) body.appendChild(h('div', 'doc small', 'THE EVIL HOUSE — CURSED MEMORIES\nDeveloper: THE LOST DISC ENTERTAINMENT\nPlatform concept: PlayStation 1 (1999) — played in a browser.\nEngine: Three.js + Vite. All audio is generated live with the Web Audio API.\n\nCHAPTER 1 — "THE FRONT DOOR":\nGarden · Grand Hall · Red Carpet Corridor · Library · Office · Kitchen · Guest Bedrooms · Secret Laboratory · Basement.\nThere are 11 crystals. Find 5+ to be able to remember yourself...'));
    else if (tab === 4) {
      if (!meta.finished) body.appendChild(h('div', 'small lock', '🔒 Finish the game once to unlock all secret files.'));
      else body.appendChild(h('div', 'doc', Object.values(DOCS).map((d) => `■ ${d.title}\n${d.text}`).join('\n\n─────────\n\n')));
    } else body.appendChild(h('div', 'doc', `GOOD ENDING — ${meta.endings.good ? 'UNLOCKED' : '🔒 locked'}\nBAD ENDING — ${meta.endings.bad ? 'UNLOCKED' : '🔒 locked'}`));
    const b = h('div', 'btns'); const c = h('button', 'btn', 'BACK'); c.onclick = () => { app.audio.back(); m.close(); }; b.appendChild(c); body.appendChild(b);
  }
  render();
}

export function openCredits(app, onDone) {
  const c = h('div', 'credits'); c.style.zIndex = 40;
  c.innerHTML = `<div class="roll"><h4>THE LOST DISC ENTERTAINMENT</h4><div>PRESENTS</div><h1 class="px">THE EVIL HOUSE</h1><div class="px" style="color:#a64dff;letter-spacing:8px">CURSED MEMORIES</div><div class="small">A RETRO SURVIVAL HORROR EXPERIENCE</div>
  <h4>CHARACTER &amp; ART DIRECTION</h4><div>THE LOST DISC ENTERTAINMENT</div><h4>GAME DESIGN</h4><div>THE LOST DISC ENTERTAINMENT</div><h4>PROGRAMMING</h4><div>Three.js · Vite · Web Audio API</div>
  <h4>MUSIC &amp; SOUND</h4><div>Procedurally generated in your browser</div><h4>SPECIAL THANKS</h4><div>Everyone who ever blew into a PS1 disc</div><h4>&nbsp;</h4><div class="small">SOMETHING IS WATCHING IN THE DARK...</div><br><br><br><div class="small blink">PRESS ENTER TO RETURN</div></div>`;
  root().appendChild(c);
  app.audio.startMusic('credits');
  let done = false;
  const end = () => { if (done) return; done = true; document.removeEventListener('keydown', k, true); c.remove(); app.audio.startMusic('menu'); onDone && onDone(); };
  const k = (e) => { if (['Escape', 'Enter', 'Space'].includes(e.code)) { e.preventDefault(); e.stopPropagation(); end(); } };
  document.addEventListener('keydown', k, true); c.onclick = end;
  c.querySelector('.roll').addEventListener('animationend', end);
}
