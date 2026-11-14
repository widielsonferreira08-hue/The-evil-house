export const MAX_SLOTS = 8;
export const ITEMS = {
  flashlight: { name: 'Flashlight', icon: '🔦', stack: 1, desc: 'It still has some battery. Press F to switch it on or off.' },
  battery:    { name: 'Battery', icon: '🔋', stack: 3, use: 'battery', desc: 'Restores 50% of flashlight power.' },
  medkit:     { name: 'Med Kit', icon: '✚', stack: 2, use: 'heal', desc: 'Restores 50 HP.' },
  brass_key:  { name: 'Brass Key', icon: '🗝', stack: 1, desc: 'An old brass key. The tag reads: OFFICE.' },
  bedroom_key: { name: 'Bedroom Key', icon: '🗝', stack: 1, desc: 'A small silver key. The tag reads: GUEST ROOMS.' },
  gear:       { name: 'Brass Gear', icon: '⚙', stack: 2, desc: 'A heavy brass gear from an old mechanism. There must be a machine that needs it.' },
  cellar_key: { name: 'Iron Key', icon: '🔑', stack: 1, desc: 'A cold iron key. It smells of damp stone. It must open something below.' },
};

export class Inventory {
  constructor() { this.slots = []; }
  add(id, qty = 1) {
    const def = ITEMS[id];
    if (!def) return false;
    let left = qty;
    for (const s of this.slots) { if (s.id === id && s.qty < def.stack && left > 0) { const n = Math.min(def.stack - s.qty, left); s.qty += n; left -= n; } }
    while (left > 0) {
      if (this.slots.length >= MAX_SLOTS) return left < qty;
      const n = Math.min(def.stack, left); this.slots.push({ id, qty: n }); left -= n;
    }
    return true;
  }
  canAdd(id) {
    const def = ITEMS[id];
    return this.slots.some((s) => s.id === id && s.qty < def.stack) || this.slots.length < MAX_SLOTS;
  }
  count(id) { return this.slots.filter((s) => s.id === id).reduce((a, s) => a + s.qty, 0); }
  has(id) { return this.count(id) > 0; }
  remove(id, qty = 1) {
    for (let i = this.slots.length - 1; i >= 0 && qty > 0; i--) {
      const s = this.slots[i]; if (s.id !== id) continue;
      const n = Math.min(s.qty, qty); s.qty -= n; qty -= n;
      if (s.qty <= 0) this.slots.splice(i, 1);
    }
  }
  toJSON() { return this.slots.map((s) => ({ ...s })); }
  fromJSON(a) { this.slots = Array.isArray(a) ? a.filter((s) => ITEMS[s.id]).map((s) => ({ id: s.id, qty: s.qty })) : []; }
}
