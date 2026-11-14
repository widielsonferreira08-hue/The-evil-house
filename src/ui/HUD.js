import { h, root } from './ui.js';

export class HUD {
  constructor() {
    this.el = h('div'); this.el.id = 'hud'; root().appendChild(this.el);
    this.el.innerHTML = `
      <div class="hud-tl"><div class="port"></div><div><div class="lives px">03</div><div class="hpbar"><div></div></div></div></div>
      <div class="hud-tr px"><div class="gem"></div><span class="cry">00</span></div>
      <div class="hud-bl px"><div class="ammo">00</div><div class="bat">FLASH 100%</div></div>
      <div class="roomname px"></div><div class="msg px"></div><div class="prompt px"></div>
      <div class="hurt"></div><div class="fadeblk"></div>`;
    const q = (s) => this.el.querySelector(s);
    this.lives = q('.lives'); this.hp = q('.hpbar>div'); this.cry = q('.cry'); this.ammo = q('.ammo'); this.bat = q('.bat');
    this.room = q('.roomname'); this.msg = q('.msg'); this.prompt = q('.prompt'); this.hurtEl = q('.hurt'); this.fadeEl = q('.fadeblk');
    this.dlg = null; this.dlgQueue = []; this.dlgDone = null; this.typed = 0; this.msgT = 0; this.roomT = 0;
  }
  update(st, dt) {
    this.lives.textContent = String(st.lives).padStart(2, '0');
    this.hp.style.width = Math.max(0, st.hp) + '%'; this.hp.style.background = st.hp > 50 ? '#7ad03a' : st.hp > 25 ? '#d0b03a' : '#d03a3a';
    this.cry.textContent = String(st.crystals).padStart(2, '0');
    this.ammo.textContent = String(st.ammo).padStart(2, '0');
    const b = Math.ceil(st.battery); this.bat.textContent = `FLASH ${b}%${st.light ? '' : ' OFF'}`; this.bat.classList.toggle('low', b <= 15);
    if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) this.msg.textContent = ''; }
    if (this.roomT > 0) { this.roomT -= dt; if (this.roomT <= 0) this.room.classList.remove('on'); }
    if (this.dlg) { this.typed += dt * 55; const t = this.dlgCur.text; this.dlgTxt.textContent = t.slice(0, Math.floor(this.typed)); this.dlgNx.style.visibility = this.typed >= t.length ? 'visible' : 'hidden'; }
  }
  setPrompt(t) { this.prompt.textContent = t || ''; }
  toast(t, secs = 2.6) { this.msg.textContent = t; this.msgT = secs; }
  roomName(n) { this.room.textContent = n; this.room.classList.add('on'); this.roomT = 2.6; }
  hurt() { this.hurtEl.classList.add('on'); requestAnimationFrame(() => requestAnimationFrame(() => this.hurtEl.classList.remove('on'))); }
  fade(on) { this.fadeEl.classList.toggle('on', on); }
  get talking() { return !!this.dlg; }
  /** lines: [{who,text}] */
  say(lines, done) {
    this.dlgQueue = lines.slice(); this.dlgDone = done; this.next(true);
  }
  next(first) {
    if (this.dlg && !first) {
      if (this.typed < this.dlgCur.text.length) { this.typed = 1e9; return; }
    }
    if (!this.dlgQueue.length) { if (this.dlg) { this.dlg.remove(); this.dlg = null; } const d = this.dlgDone; this.dlgDone = null; d && d(); return; }
    this.dlgCur = this.dlgQueue.shift(); this.typed = 0;
    if (!this.dlg) {
      this.dlg = h('div', 'dlg'); this.dlg.innerHTML = '<div class="who px"></div><div class="txt"></div><div class="nx">▼</div>';
      this.dlg.onclick = () => this.next(); this.el.appendChild(this.dlg);
      this.dlgWho = this.dlg.querySelector('.who'); this.dlgTxt = this.dlg.querySelector('.txt'); this.dlgNx = this.dlg.querySelector('.nx');
    }
    this.dlgWho.textContent = this.dlgCur.who ? this.dlgCur.who + ':' : ''; this.dlgWho.style.color = this.dlgCur.color || '';
  }
  dispose() { this.el.remove(); }
}
