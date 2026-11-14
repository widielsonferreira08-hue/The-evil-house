// 100% procedural audio (Web Audio API) — no external sound files, no licensing issues.
export class AudioManager {
  constructor(settings) {
    this.s = settings;
    this.ctx = null;
    this.musicTimer = null;
    this.ambientNodes = null;
    this.creakTimer = null;
    this.theme = null;
    this.step = 0;
    settings.onChange(() => this.refresh());
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain(); this.master.connect(c.destination);
    this.musicBus = c.createGain(); this.sfxBus = c.createGain(); this.ambBus = c.createGain();
    [this.musicBus, this.sfxBus, this.ambBus].forEach((b) => b.connect(this.master));
    // simple feedback delay = cheap cave reverb for music
    this.delay = c.createDelay(1); this.delay.delayTime.value = 0.34;
    const fb = c.createGain(); fb.gain.value = 0.38;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
    this.delay.connect(lp); lp.connect(fb); fb.connect(this.delay); lp.connect(this.musicBus);
    this.noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.refresh();
  }
  refresh() {
    if (!this.ctx) return;
    const s = this.s, t = this.ctx.currentTime, m = s.get('mute') ? 0 : 1;
    this.master.gain.setTargetAtTime(s.get('master') * m, t, 0.05);
    this.musicBus.gain.setTargetAtTime(s.get('music'), t, 0.05);
    this.sfxBus.gain.setTargetAtTime(s.get('sfx'), t, 0.05);
    this.ambBus.gain.setTargetAtTime(s.get('ambient'), t, 0.05);
  }
  get ok() { return !!this.ctx && this.ctx.state === 'running'; }

  tone(freq, dur, { type = 'square', vol = 0.15, slide = 0, bus = 'sfxBus', delay = 0, send = false } = {}) {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this[bus]); if (send) g.connect(this.delay);
    o.start(t); o.stop(t + dur + 0.05);
  }
  noise(dur, { vol = 0.2, freq = 1000, q = 1, type = 'lowpass', bus = 'sfxBus', delay = 0 } = {}) {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime + delay;
    const src = c.createBufferSource(); src.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this[bus]);
    src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }
  // ---- sound effects
  select() { this.tone(520, 0.07, { type: 'square', vol: 0.08 }); }
  confirm() { this.tone(330, 0.08, { vol: 0.1 }); this.tone(660, 0.12, { vol: 0.1, delay: 0.07 }); }
  back() { this.tone(300, 0.1, { vol: 0.08, slide: -120 }); }
  footstep(run) { this.noise(0.07, { vol: run ? 0.22 : 0.13, freq: run ? 700 : 450 }); }
  door() { this.noise(0.5, { vol: 0.25, freq: 260, q: 4 }); this.tone(90, 0.5, { type: 'sawtooth', vol: 0.08, slide: 40 }); }
  locked() { this.tone(120, 0.08, { type: 'square', vol: 0.15 }); this.tone(100, 0.1, { type: 'square', vol: 0.15, delay: 0.1 }); }
  flash() { this.noise(0.03, { vol: 0.2, freq: 3000, type: 'highpass' }); }
  pickup() { this.tone(660, 0.08, { type: 'triangle', vol: 0.14 }); this.tone(990, 0.14, { type: 'triangle', vol: 0.14, delay: 0.08 }); }
  crystal() { [880, 1175, 1568].forEach((f, i) => this.tone(f, 0.25, { type: 'sine', vol: 0.12, delay: i * 0.07, send: true })); }
  shoot() { this.noise(0.18, { vol: 0.35, freq: 1500 }); this.tone(900, 0.2, { type: 'sawtooth', vol: 0.12, slide: -700 }); }
  click() { this.tone(180, 0.04, { vol: 0.1 }); }
  hit() { this.noise(0.25, { vol: 0.35, freq: 400 }); this.tone(110, 0.3, { type: 'sawtooth', vol: 0.2, slide: -60 }); }
  growl() { this.tone(70, 0.9, { type: 'sawtooth', vol: 0.18, slide: -30 }); this.noise(0.8, { vol: 0.1, freq: 200 }); }
  stinger() {
    [220, 233, 311].forEach((f) => this.tone(f, 1.4, { type: 'sawtooth', vol: 0.09, slide: -20, send: true }));
    this.noise(0.9, { vol: 0.15, freq: 5000, type: 'highpass' });
  }
  heartbeat() { this.tone(55, 0.12, { type: 'sine', vol: 0.4 }); this.tone(50, 0.14, { type: 'sine', vol: 0.35, delay: 0.17 }); }
  whisper() { this.noise(1.2, { vol: 0.08, freq: 2500, q: 6, type: 'bandpass' }); }
  boot() { [196, 294, 392, 587, 784].forEach((f, i) => this.tone(f, 1.6, { type: 'sine', vol: 0.09, delay: i * 0.18, send: true })); }
  thump() { this.tone(45, 1.4, { type: 'sine', vol: 0.5, slide: -15 }); this.noise(1.2, { vol: 0.2, freq: 120 }); }
  tape() { this.noise(2.5, { vol: 0.1, freq: 3500, q: 0.6, type: 'highpass', bus: 'ambBus' }); }

  // ---- ambience: wind + drone + random creaks
  startAmbient() {
    if (!this.ok || this.ambientNodes) return;
    const c = this.ctx;
    const src = c.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 380; f.Q.value = 1.2;
    const g = c.createGain(); g.gain.value = 0.07;
    const lfo = c.createOscillator(), lg = c.createGain(); lfo.frequency.value = 0.12; lg.gain.value = 0.05;
    lfo.connect(lg); lg.connect(g.gain); lfo.start();
    src.connect(f); f.connect(g); g.connect(this.ambBus); src.start();
    const d1 = c.createOscillator(), d2 = c.createOscillator(), dg = c.createGain();
    d1.type = d2.type = 'sawtooth'; d1.frequency.value = 55; d2.frequency.value = 55.7; dg.gain.value = 0.025;
    const dl = c.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 160;
    d1.connect(dl); d2.connect(dl); dl.connect(dg); dg.connect(this.ambBus); d1.start(); d2.start();
    this.ambientNodes = [src, lfo, d1, d2];
    const creak = () => {
      if (!this.ambientNodes) return;
      const r = Math.random();
      if (r < 0.4) this.tone(140 + Math.random() * 60, 0.7, { type: 'sawtooth', vol: 0.05, slide: 40, bus: 'ambBus' });
      else if (r < 0.7) this.noise(0.4, { vol: 0.08, freq: 220, bus: 'ambBus' });
      else this.whisper();
      this.creakTimer = setTimeout(creak, 6000 + Math.random() * 12000);
    };
    this.creakTimer = setTimeout(creak, 5000);
  }
  stopAmbient() {
    if (!this.ambientNodes) return;
    this.ambientNodes.forEach((n) => { try { n.stop(); } catch (e) { /* already stopped */ } });
    this.ambientNodes = null; clearTimeout(this.creakTimer);
  }
  // ---- music: slow minor-key arpeggios
  startMusic(theme = 'menu') {
    if (!this.ok) return;
    if (this.theme === theme && this.musicTimer) return;
    this.stopMusic(); this.theme = theme; this.step = 0;
    const scales = {
      menu: { root: 110, notes: [0, 3, 7, 10, 12, 7, 3, 10], bpm: 52, wave: 'triangle' },
      game: { root: 82.4, notes: [0, 7, 3, 12, 1, 8, 3, 10], bpm: 44, wave: 'sine' },
      final: { root: 73.4, notes: [0, 1, 6, 7, 12, 13, 6, 1], bpm: 70, wave: 'sawtooth' },
      credits: { root: 110, notes: [0, 7, 12, 7, 3, 10, 15, 10], bpm: 56, wave: 'triangle' },
    };
    const sc = scales[theme] || scales.menu, beat = 60 / sc.bpm;
    const tick = () => {
      const n = sc.notes[this.step % sc.notes.length];
      const f = sc.root * Math.pow(2, n / 12);
      this.tone(f, beat * 1.6, { type: sc.wave, vol: theme === 'game' ? 0.05 : 0.07, bus: 'musicBus', send: true });
      if (this.step % 8 === 0) this.tone(sc.root / 2, beat * 6, { type: 'sine', vol: 0.09, bus: 'musicBus' });
      this.step++;
    };
    tick();
    this.musicTimer = setInterval(tick, beat * 1000);
  }
  stopMusic() { clearInterval(this.musicTimer); this.musicTimer = null; this.theme = null; }
}
