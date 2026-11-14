import { h, modal } from './ui.js';
import { ITEMS, MAX_SLOTS } from '../game/Inventory.js';
import { DOCS } from '../environments/Rooms.js';

export function openInventory(app, state, { onClose, onUse } = {}) {
  const m = modal(app, 'INVENTORY', { onClose, noEsc: true });
  let tab = 'item', idx = 0;
  const tabs = h('div', 'tabs'), body = h('div'); m.panel.append(tabs, body);
  const close = () => { app.audio.back(); document.removeEventListener('keydown', key, true); m.close(); };
  function render() {
    tabs.innerHTML = ''; body.innerHTML = '';
    [['item', 'ITEM'], ['files', 'FILES']].forEach(([id, l]) => { const t = h('div', 'tab' + (tab === id ? ' on' : ''), l); t.onclick = () => { tab = id; idx = 0; app.audio.select(); render(); }; tabs.appendChild(t); });
    const wrap = h('div', 'invwrap'); body.appendChild(wrap);
    if (tab === 'item') {
      const grid = h('div', 'inv'); wrap.appendChild(grid);
      for (let i = 0; i < MAX_SLOTS; i++) {
        const s = state.inv.slots[i], c = h('div', 'cell' + (i === idx ? ' sel' : ''), s ? ITEMS[s.id].icon + (s.qty > 1 ? `<span class="q">x${s.qty}</span>` : '') : '');
        c.onclick = () => { idx = i; app.audio.select(); render(); }; grid.appendChild(c);
      }
      const s = state.inv.slots[idx], d = h('div', 'desc');
      d.innerHTML = s ? `<b>${ITEMS[s.id].name}</b>${ITEMS[s.id].desc}<br><br>Qty: ${s.qty}` : '<b>—</b>Empty slot.';
      wrap.appendChild(d);
      const b = h('div', 'btns');
      if (s && ITEMS[s.id].use) { const u = h('button', 'btn', 'USE'); u.onclick = () => { const msg = onUse ? onUse(s.id) : state.useItem(s.id); app.audio.confirm(); render(); d.innerHTML += `<br><br><span style="color:#ffd9a0">${msg}</span>`; }; b.appendChild(u); }
      const c = h('button', 'btn', 'CLOSE'); c.onclick = close; b.appendChild(c); body.appendChild(b);
      body.insertAdjacentHTML('beforeend', `<div class="small" style="margin-top:8px">Crystals: ${state.crystals} &nbsp; Ammo: ${state.ammo} &nbsp; Flash: ${Math.ceil(state.battery)}%</div>`);
    } else {
      const list = h('div', 'slots'); list.style.minWidth = '180px'; wrap.appendChild(list);
      if (!state.docs.length) list.appendChild(h('div', 'small', 'No files found yet.'));
      state.docs.forEach((id, i) => { const d = h('div', 'slot' + (i === idx ? ' sel' : ''), DOCS[id].title); d.onclick = () => { idx = i; app.audio.select(); render(); }; list.appendChild(d); });
      const id = state.docs[idx];
      const d = h('div', 'doc', id ? `<b style="color:var(--orange)">${DOCS[id].title}</b>\n\n${DOCS[id].text}` : ''); wrap.appendChild(d);
      const b = h('div', 'btns'); const c = h('button', 'btn', 'CLOSE'); c.onclick = close; b.appendChild(c); body.appendChild(b);
    }
  }
  const key = (e) => {
    if (e.code === 'Escape' || e.code === 'KeyI') { e.preventDefault(); e.stopPropagation(); close(); return; }
    const n = tab === 'item' ? MAX_SLOTS : Math.max(1, state.docs.length);
    if (e.code === 'ArrowRight' || e.code === 'KeyD') { idx = (idx + 1) % n; app.audio.select(); render(); }
    else if (e.code === 'ArrowLeft' || e.code === 'KeyA') { idx = (idx + n - 1) % n; app.audio.select(); render(); }
    else if (e.code === 'ArrowDown' || e.code === 'KeyS') { idx = tab === 'item' ? (idx + 4) % n : (idx + 1) % n; app.audio.select(); render(); }
    else if (e.code === 'ArrowUp' || e.code === 'KeyW') { idx = tab === 'item' ? (idx + n - 4) % n : (idx + n - 1) % n; app.audio.select(); render(); }
    else if (e.code === 'Tab') { tab = tab === 'item' ? 'files' : 'item'; idx = 0; app.audio.select(); render(); }
    else if (e.code === 'KeyE' || e.code === 'Enter') { const b = body.querySelector('.btn'); if (b && b.textContent === 'USE') b.click(); }
    else return;
    e.preventDefault(); e.stopPropagation();
  };
  document.addEventListener('keydown', key, true);
  render();
  return m;
}

export function readDocument(app, docId, onClose) {
  const d = DOCS[docId];
  const m = modal(app, d.title, { onClose, noEsc: true });
  m.panel.appendChild(h('div', 'doc', d.text));
  const b = h('div', 'btns'); const c = h('button', 'btn', 'CLOSE'); b.appendChild(c); m.panel.appendChild(b);
  const done = () => { document.removeEventListener('keydown', k, true); app.audio.back(); m.close(); };
  const k = (e) => { if (['Escape', 'Enter', 'KeyE', 'Space'].includes(e.code)) { e.preventDefault(); e.stopPropagation(); done(); } };
  document.addEventListener('keydown', k, true); c.onclick = done;
}
