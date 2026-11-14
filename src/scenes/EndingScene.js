import * as THREE from 'three';
import { buildFox } from '../entities/Willow.js';
import { surf } from '../environments/Retro.js';
import * as P from '../environments/Props.js';
import { h, root } from '../ui/ui.js';
import { openCredits } from '../ui/Menu.js';

/** 05 — good / bad ending cutscenes, then credits and back to the title screen. */
export class EndingScene {
  constructor(app) { this.app = app; this.scene = new THREE.Scene(); this.camera = new THREE.PerspectiveCamera(50, 1.6, 0.1, 100); this.t = 0; this.lines = []; this.li = -1; this.stage = 0; }
  enter({ ending }) {
    const app = this.app, sc = this.scene; this.ending = ending;
    const meta = app.saves.meta(); meta.endings[ending] = true; meta.finished = true; app.saves.setMeta(meta);
    app.stopAll();
    sc.add(P.plane(60, 60, surf('stone', 0x666677), 0, 0, 0, 'up', 3));
    if (ending === 'bad') {
      sc.background = new THREE.Color(0x07020e); sc.fog = new THREE.FogExp2(0x07020e, 0.05);
      sc.add(new THREE.AmbientLight(0x3a1a5a, 1.2));
      this.pl = new THREE.PointLight(0xa040ff, 4, 14); this.pl.position.set(0, 3, 3); sc.add(this.pl);
      this.fox = buildFox({ possessed: true }); this.fox.group.scale.setScalar(2.2); this.fox.group.position.set(0, -2.2, 0); sc.add(this.fox.group); this.fox.setAnim('scared');
      this.camera.position.set(0, 2.2, 4.4); app.audio.startMusic('final'); app.audio.stinger();
      this.lines = [{ who: 'Willow?', text: '...Help me... Please...', color: '#a64dff' }, { who: '', text: 'You reached the altar without remembering enough of yourself.' }, { who: '', text: 'The house remembers. And now it wears your face.', color: '#b3122e' }];
      this.title = 'BAD ENDING';
    } else {
      sc.background = new THREE.Color(0x4a3560); sc.fog = new THREE.FogExp2(0x5a3a60, 0.03);
      sc.add(new THREE.AmbientLight(0x9a80b0, 1.2)); const sun = new THREE.DirectionalLight(0xffc080, 2.2); sun.position.set(-6, 5, 8); sc.add(sun);
      this.fox = buildFox({ possessed: true }); this.fox.group.position.set(1.6, 0.4, 0); this.fox.group.rotation.set(0, -0.6, 0); this.fox.setAnim('idle'); sc.add(this.fox.group); this.fox.group.rotation.z = Math.PI / 2 * 0.9;
      this.will = buildFox(); this.will.group.position.set(-1.4, 0, 0); this.will.group.rotation.y = 0.5; sc.add(this.will.group);
      this.twin = buildFox(); this.twin.group.position.set(1.6, 0, 0); this.twin.group.rotation.y = -0.5; this.twin.group.visible = false; this.twin.group.scale.setScalar(0.95); sc.add(this.twin.group);
      this.camera.position.set(0, 2.4, 7.5); app.audio.startMusic('credits');
      this.lines = [{ who: '???', text: 'You found her...', color: '#a64dff' }, { who: 'Willow', text: 'I remember now. She was me — the part I left behind in this house.', color: '#ff8a1e' }, { who: 'Willow', text: 'Come home with me.', color: '#ff8a1e' }, { who: '', text: 'The dark lets go. Dawn comes through the broken windows, and the front door swings open.' }];
      this.title = 'GOOD ENDING';
    }
    this.ui = h('div', 'full'); this.ui.style.cssText += ';pointer-events:auto'; root().appendChild(this.ui);
    this.dlg = h('div', 'dlg'); this.dlg.innerHTML = '<div class="who px"></div><div class="txt"></div><div class="nx">▼</div>'; this.ui.appendChild(this.dlg);
    this.keyH = (e) => { if (['Enter', 'Space', 'KeyE'].includes(e.code)) this.next(); }; document.addEventListener('keydown', this.keyH); this.ui.onclick = () => this.next();
    this.fadeEl = h('div', 'fadeblk on'); this.ui.appendChild(this.fadeEl); requestAnimationFrame(() => requestAnimationFrame(() => this.fadeEl.classList.remove('on')));
    setTimeout(() => this.next(), 1800);
  }
  next() {
    if (this.stage === 2) return;
    if (this.typing && this.typed < this.cur.text.length) { this.typed = 1e9; return; }
    this.li++;
    if (this.li >= this.lines.length) { this.finish(); return; }
    this.cur = this.lines[this.li]; this.typed = 0; this.typing = true;
    this.dlg.querySelector('.who').textContent = this.cur.who ? this.cur.who + ':' : ''; this.dlg.querySelector('.who').style.color = this.cur.color || '';
    if (this.ending === 'good' && this.li === 2) { this.fox.group.visible = false; this.twin.group.visible = true; this.app.audio.crystal(); }
    if (this.ending === 'bad' && this.li === 1) this.app.audio.growl();
  }
  finish() {
    this.stage = 2; this.dlg.remove();
    const t = h('div', 'px big', this.title); t.style.cssText = 'color:' + (this.ending === 'bad' ? '#b3122e' : '#ffd080') + ';letter-spacing:10px'; this.ui.appendChild(t);
    setTimeout(() => { this.ui.remove(); openCredits(this.app, () => this.app.goto('menu')); }, 3200);
  }
  update(dt) {
    this.t += dt; const t = this.t;
    if (this.typing && this.cur) { this.typed += dt * 40; const tx = this.cur.text; this.dlg.querySelector('.txt').textContent = tx.slice(0, Math.floor(this.typed)); this.dlg.querySelector('.nx').style.visibility = this.typed >= tx.length ? 'visible' : 'hidden'; }
    if (this.ending === 'bad') {
      this.fox.update(dt); this.fox.group.rotation.y = Math.sin(t * 0.6) * 0.25; this.fox.group.position.y = -2.2 + Math.sin(t * 2) * 0.03;
      this.camera.position.z = 4.4 - Math.min(1.2, t * 0.08); this.camera.lookAt(0, 2.5, 0); this.pl.intensity = 3 + Math.sin(t * 9) * 1.2;
    } else {
      this.fox.update(dt); this.will.update(dt); this.twin.update(dt); this.will.setAnim('idle'); this.twin.setAnim('idle');
      this.camera.position.x = Math.sin(t * 0.2) * 1.2; this.camera.lookAt(0, 1.4, 0);
    }
  }
  exit() { document.removeEventListener('keydown', this.keyH); this.ui && this.ui.remove(); }
}
