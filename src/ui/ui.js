// Tiny DOM helpers + menu list / dialogs / slot picker shared by all screens.
export const root = () => document.getElementById('ui');
export function h(tag, cls = '', html = '') { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

export class MenuList {
  constructor(app, items, { className = 'pm', onEsc } = {}) {
    this.app = app; this.items = items; this.sel = items.findIndex((i) => !i.disabled); if (this.sel < 0) this.sel = 0; this.onEsc = onEsc;
    this.el = h('ul', className);
    this.lis = items.map((it, i) => {
      const li = h('li', it.disabled ? 'dis' : '', it.label);
      li.addEventListener('mouseenter', () => this.setSel(i));
      li.addEventListener('click', () => this.choose(i));
      this.el.appendChild(li); return li;
    });
    this.setSel(this.sel, true);
    this._k = (e) => this.key(e);
  }
  setSel(i, silent) { if (this.items[i].disabled) return; this.sel = i; this.lis.forEach((l, k) => l.classList.toggle('sel', k === i)); if (!silent) this.app.audio.select(); }
  choose(i) { const it = this.items[i]; if (it.disabled) { this.app.audio.locked(); return; } this.app.audio.confirm(); it.action && it.action(); }
  key(e) {
    const n = this.items.length;
    const step = (d) => { let i = this.sel; for (let k = 0; k < n; k++) { i = (i + d + n) % n; if (!this.items[i].disabled) break; } this.setSel(i); };
    if (e.code === 'ArrowUp' || e.code === 'KeyW') step(-1);
    else if (e.code === 'ArrowDown' || e.code === 'KeyS') step(1);
    else if (e.code === 'Enter' || e.code === 'Space' || e.code === 'KeyE') this.choose(this.sel);
    else if (e.code === 'Escape' && this.onEsc) this.onEsc();
    else return;
    e.preventDefault(); e.stopPropagation();
  }
  attach() { document.addEventListener('keydown', this._k); return this; }
  detach() { document.removeEventListener('keydown', this._k); }
}

/** Generic modal panel. Returns {ov, panel, close()} — Escape closes unless opts.noEsc. */
export function modal(app, title, opts = {}) {
  const ov = h('div', 'overlay'), panel = h('div', 'panel');
  if (title) panel.appendChild(h('h3', '', title));
  ov.appendChild(panel); root().appendChild(ov);
  const m = {
    ov, panel,
    close() { document.removeEventListener('keydown', m._k, true); ov.remove(); opts.onClose && opts.onClose(); },
  };
  m._k = (e) => { if (e.code === 'Escape' && !opts.noEsc) { e.preventDefault(); e.stopPropagation(); app.audio.back(); m.close(); } };
  document.addEventListener('keydown', m._k, true);
  return m;
}

export function confirmDialog(app, msg, onYes, onNo) {
  const m = modal(app, null, { noEsc: true });
  m.panel.appendChild(h('p', 'mid', msg)); m.panel.firstChild.style.marginBottom = '12px';
  const b = h('div', 'btns');
  const yes = h('button', 'btn', 'YES'), no = h('button', 'btn', 'NO');
  const done = (fn) => { document.removeEventListener('keydown', k); m.close(); fn && fn(); };
  yes.onclick = () => { app.audio.confirm(); done(onYes); }; no.onclick = () => { app.audio.back(); done(onNo); };
  const k = (e) => { if (e.code === 'KeyY' || e.code === 'Enter') { e.preventDefault(); e.stopPropagation(); yes.click(); } else if (e.code === 'KeyN' || e.code === 'Escape') { e.preventDefault(); e.stopPropagation(); no.click(); } };
  document.addEventListener('keydown', k);
  b.append(no, yes); m.panel.appendChild(b); no.focus();
}

export function slotPicker(app, mode, onPick, onBack) {
  const m = modal(app, mode === 'save' ? 'SAVE GAME' : 'LOAD GAME', { onClose: onBack });
  const list = h('div', 'slots'); m.panel.appendChild(list);
  const ids = mode === 'save' ? ['1', '2', '3'] : ['auto', '1', '2', '3'];
  ids.forEach((id) => {
    const info = app.saves.describe(id);
    const d = h('div', 'slot' + (!info && mode === 'load' ? ' lock' : ''),
      `<b>${id === 'auto' ? 'AUTOSAVE' : 'SLOT ' + id}</b>` + (info ? `<small>${info.room} — Lives ${info.lives} — Crystals ${info.crystals} — ${info.time} min<br>${info.date}</small>` : '<small>— EMPTY —</small>'));
    d.onclick = () => {
      if (!info && mode === 'load') { app.audio.locked(); return; }
      app.audio.confirm();
      if (mode === 'save' && info) { m.ov.style.display = 'none'; confirmDialog(app, `Overwrite slot ${id}?`, () => { m.ov.remove(); document.removeEventListener('keydown', m._k, true); onPick(id); }, () => { m.ov.style.display = ''; }); }
      else { m.close = () => {}; m.ov.remove(); document.removeEventListener('keydown', m._k, true); onPick(id); }
    };
    list.appendChild(d);
  });
  const b = h('div', 'btns'); const back = h('button', 'btn', 'BACK'); back.onclick = () => { app.audio.back(); m.close(); }; b.appendChild(back); m.panel.appendChild(b);
}
