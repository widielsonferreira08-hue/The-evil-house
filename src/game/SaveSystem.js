// Save slots (1..3 + 'auto') and meta progress (unlocks) in localStorage.
const P = 'tei_save_';
const META = 'tei_meta_v1';
export const SLOTS = ['1', '2', '3'];

export class SaveSystem {
  save(slot, data) {
    const payload = { v: 1, at: Date.now(), ...data };
    try { localStorage.setItem(P + slot, JSON.stringify(payload)); localStorage.setItem(P + 'last', String(slot)); return true; }
    catch (e) { console.warn('save failed', e); return false; }
  }
  load(slot) {
    try { const r = localStorage.getItem(P + slot); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  has(slot) { return !!this.load(slot); }
  last() {
    const s = localStorage.getItem(P + 'last');
    return s && this.has(s) ? s : (this.has('auto') ? 'auto' : null);
  }
  anySave() { return this.last() !== null || SLOTS.some((s) => this.has(s)); }
  describe(slot) {
    const d = this.load(slot);
    if (!d) return null;
    const t = new Date(d.at);
    return { room: d.roomName || d.room, lives: d.lives, crystals: d.crystals, time: Math.floor((d.playTime || 0) / 60), date: t.toLocaleString() };
  }
  meta() {
    const base = { endings: { good: false, bad: false }, docs: [], finished: false };
    try { const r = localStorage.getItem(META); return r ? { ...base, ...JSON.parse(r) } : base; } catch (e) { return base; }
  }
  setMeta(m) { try { localStorage.setItem(META, JSON.stringify(m)); } catch (e) { /* ignore */ } }
}
