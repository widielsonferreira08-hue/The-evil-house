import { Inventory, ITEMS } from './Inventory.js';
import { PLAYER_START } from '../environments/Rooms.js';

/** All persistent gameplay state (what gets saved). */
export class GameState {
  constructor() { this.reset(); }
  reset() {
    this.hp = 100; this.lives = 3; this.ammo = 8; this.battery = 100; this.crystals = 0; this.light = true;
    this.inv = new Inventory(); this.inv.add('flashlight');
    this.docs = []; this.flags = {}; this.taken = []; this.doors = {};
    this.pos = { ...PLAYER_START }; this.room = 'garden'; this.roomName = 'FRONT GARDEN';
    this.checkpoint = { ...PLAYER_START }; this.playTime = 0; this.ending = null;
  }
  serialize() {
    const { hp, lives, ammo, battery, crystals, light, docs, flags, taken, doors, pos, room, roomName, checkpoint, playTime } = this;
    return JSON.parse(JSON.stringify({ hp, lives, ammo, battery, crystals, light, docs, flags, taken, doors, pos, room, roomName, checkpoint, playTime, inv: this.inv.toJSON() }));
  }
  static from(d) {
    const s = new GameState();
    Object.assign(s, { hp: d.hp, lives: d.lives, ammo: d.ammo, battery: d.battery, crystals: d.crystals, light: d.light !== false, docs: d.docs || [], flags: d.flags || {}, taken: d.taken || [], doors: d.doors || {}, pos: d.pos || s.pos, room: d.room || 'garden', roomName: d.roomName || '', checkpoint: d.checkpoint || d.pos || s.pos, playTime: d.playTime || 0 });
    s.inv.fromJSON(d.inv);
    if (!s.inv.has('flashlight')) s.inv.add('flashlight');
    return s;
  }
  useItem(id) {
    const def = ITEMS[id];
    if (!def || !def.use) return def ? 'Nothing happens.' : '';
    if (def.use === 'battery') { if (this.battery >= 100) return 'The flashlight is already full.'; this.battery = Math.min(100, this.battery + 50); this.inv.remove(id); return 'Flashlight recharged.'; }
    if (def.use === 'heal') { if (this.hp >= 100) return 'You are not hurt.'; this.hp = Math.min(100, this.hp + 50); this.inv.remove(id); return 'You feel a little better.'; }
    return '';
  }
}
