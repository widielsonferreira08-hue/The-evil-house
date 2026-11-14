// Pure data: layout of Chapter 1 (coordinates are world units; x = east, z = south).
export const H = 4.6;        // wall height
export const T = 0.4;        // wall thickness
export const DOOR_H = 2.7;

export const ROOMS = [
  { id: 'kitchen',  name: 'THE KITCHEN',          x1: -25, x2: -9, z1: -18, z2: 0,  cam: null, lamp: { p: [-17, 3.4, -9], c: 0xd0ffb0, i: 1.3, d: 20 }, amb: [0x2a3a2a, 0.5], fog: 0x08100a, music: 'game' },
  { id: 'bedrooms', name: 'GUEST BEDROOMS',       x1: 25,  x2: 41, z1: -18, z2: 0,  cam: { pos: [26.0, 4.0, -1.1], look: [34, 0.8, -9], fov: 64 }, lamp: { p: [33, 3.4, -9], c: 0x8aa0ff, i: 1.2, d: 20 }, amb: [0x22284a, 0.5], fog: 0x07091a, music: 'game' },
  { id: 'lab',      name: 'SECRET LABORATORY',    x1: 9,   x2: 25, z1: -18, z2: 0,  cam: null, lamp: { p: [17, 3.4, -9], c: 0x60ffc0, i: 1.6, d: 22 }, amb: [0x1a3a3a, 0.55], fog: 0x04100e, music: 'final' },
  { id: 'cellar',   name: 'THE BASEMENT',        x1: -9,  x2: 9,  z1: -18, z2: 0,  cam: null, lamp: { p: [0, 3.2, -9],  c: 0xa060ff, i: 1.5, d: 22 }, amb: [0x2a1a44, 0.5], fog: 0x0a0414, music: 'final' },
  { id: 'corridor', name: 'RED CARPET CORRIDOR', x1: 9,   x2: 25, z1: 6.5, z2: 9.5, cam: null, lamp: { p: [17, 3.2, 8],  c: 0xff6a40, i: 1.3, d: 14 }, amb: [0x3a1a1a, 0.5], fog: 0x120608, music: 'game' },
  { id: 'library',  name: 'THE LIBRARY',         x1: 25,  x2: 41, z1: 0,   z2: 16,  cam: { pos: [26.0, 4.0, 15.1], look: [34, 0.8, 5], fov: 64 }, lamp: { p: [33, 3.4, 8], c: 0xffc070, i: 1.5, d: 20 }, amb: [0x3a2a22, 0.5], fog: 0x0e0a08, music: 'game' },
  { id: 'office',   name: 'THE OFFICE',          x1: -25, x2: -9, z1: 0,   z2: 16,  cam: { pos: [-24.0, 4.0, 15.1], look: [-16, 0.8, 5], fov: 64 }, lamp: { p: [-17, 3.4, 8], c: 0xffd090, i: 1.4, d: 20 }, amb: [0x2a2a3a, 0.5], fog: 0x0a0a10, music: 'game' },
  { id: 'hall',     name: 'GRAND HALL',          x1: -9,  x2: 9,  z1: 0,   z2: 16,  cam: { pos: [-8.2, 4.1, 15.1], look: [2, 0.8, 5], fov: 66 }, lamp: { p: [0, 3.8, 8], c: 0xffb070, i: 1.7, d: 24 }, amb: [0x3a2438, 0.55], fog: 0x0d0710, music: 'game' },
  { id: 'garden',   name: 'FRONT GARDEN',        x1: -14, x2: 14, z1: 16,  z2: 40,  cam: null, lamp: { p: [0, 3, 30], c: 0xffa050, i: 0.8, d: 16 }, amb: [0x20284a, 0.9], fog: 0x0c0a1e, music: 'game', outdoor: true },
];

// axis 'x' = wall runs along x at z=c from a to b. axis 'z' = runs along z at x=c.
// pos/neg = surface for the +side / -side faces.
export const WALLS = [
  { axis: 'x', c: 16, a: -14, b: 14, gaps: [{ at: 0, w: 3 }], pos: 'brick', neg: 'wall' },
  { axis: 'x', c: 0,  a: -9,  b: 9,  gaps: [{ at: 0, w: 3 }], pos: 'wall', neg: 'stone' },
  { axis: 'z', c: -9, a: 0,   b: 16, gaps: [{ at: 8, w: 2.4 }], pos: 'wall', neg: 'wall' },
  { axis: 'z', c: 9,  a: 0,   b: 16, gaps: [{ at: 8, w: 2.4 }], pos: 'wall', neg: 'wall' },
  { axis: 'x', c: 6.5, a: 9,  b: 25, gaps: [], pos: 'wall', neg: 'wall' },
  { axis: 'x', c: 9.5, a: 9,  b: 25, gaps: [], pos: 'wall', neg: 'wall' },
  { axis: 'z', c: 25, a: 0,   b: 16, gaps: [{ at: 8, w: 2.4 }], pos: 'darkwood', neg: 'wall' },
  { axis: 'z', c: 41, a: 0,   b: 16, gaps: [], pos: 'brick', neg: 'darkwood' },
  { axis: 'x', c: 0,  a: 25,  b: 41, gaps: [{ at: 33.5, w: 2.4 }], pos: 'darkwood', neg: 'wall' },
  { axis: 'x', c: 16, a: 25,  b: 41, gaps: [], pos: 'brick', neg: 'darkwood' },
  { axis: 'z', c: -25, a: 0,  b: 16, gaps: [], pos: 'wall', neg: 'brick' },
  { axis: 'x', c: 0,  a: -25, b: -9, gaps: [{ at: -17, w: 2.4 }], pos: 'wall', neg: 'brick' },
  { axis: 'x', c: 16, a: -25, b: -9, gaps: [], pos: 'brick', neg: 'wall' },
  { axis: 'z', c: -9, a: -18, b: 0,  gaps: [], pos: 'stone', neg: 'brick' },
  { axis: 'z', c: 9,  a: -18, b: 0,  gaps: [], pos: 'brick', neg: 'stone' },
  { axis: 'x', c: -18, a: -9, b: 9,  gaps: [], pos: 'stone', neg: 'brick' },
  // kitchen, guest bedrooms, secret laboratory
  { axis: 'z', c: -25, a: -18, b: 0, gaps: [], pos: 'brick', neg: 'brick' },
  { axis: 'x', c: -18, a: -25, b: -9, gaps: [], pos: 'brick', neg: 'brick' },
  { axis: 'z', c: 41, a: -18, b: 0, gaps: [], pos: 'brick', neg: 'wall' },
  { axis: 'x', c: -18, a: 25, b: 41, gaps: [], pos: 'wall', neg: 'brick' },
  { axis: 'z', c: 25, a: -18, b: 0, gaps: [{ at: -9, w: 2 }], pos: 'wall', neg: 'stone' },
  { axis: 'x', c: -18, a: 9, b: 25, gaps: [], pos: 'stone', neg: 'brick' },
  { axis: 'x', c: 0, a: 9, b: 25, gaps: [], pos: 'brick', neg: 'stone' },
  // secret nook inside the library (closed by the movable bookshelf)
  { axis: 'x', c: 4,  a: 35, b: 41, gaps: [{ at: 39.5, w: 2 }], pos: 'darkwood', neg: 'darkwood', low: true },
  { axis: 'z', c: 35, a: 0,  b: 4,  gaps: [], pos: 'darkwood', neg: 'darkwood', low: true },
];

export const DOORS = [
  { id: 'front',    axis: 'x', c: 16, at: 0,    w: 3,   name: 'Front Door',   lockedMsg: 'The front door slammed shut. It will not open.' },
  { id: 'cellar',   axis: 'x', c: 0,  at: 0,    w: 3,   name: 'Basement Door', lock: 'cellar_key', lockedMsg: 'Locked. It needs an iron key.' },
  { id: 'office',   axis: 'z', c: -9, at: 8,    w: 2.4, name: 'Office Door',  lock: 'brass_key',  lockedMsg: 'Locked. The lock is brass.' },
  { id: 'corridor', axis: 'z', c: 9,  at: 8,    w: 2.4, name: 'Corridor Door' },
  { id: 'library',  axis: 'z', c: 25, at: 8,    w: 2.4, name: 'Library Door' },
  { id: 'kitchen',  axis: 'x', c: 0, at: -17,  w: 2.4, name: 'Kitchen Door' },
  { id: 'bedroom',  axis: 'x', c: 0, at: 33.5, w: 2.4, name: 'Bedroom Door', lock: 'bedroom_key', lockedMsg: 'Locked. The tag reads: GUEST ROOMS.' },
  { id: 'labdoor',  axis: 'z', c: 25, at: -9,  w: 2,   name: 'Hidden Door', tex: 'stone', lockFlag: 'lab_open', lockedMsg: 'Just a stone wall... but you can hear gears behind it.' },
  { id: 'secret',   axis: 'x', c: 4,  at: 39.5, w: 2,   name: 'Bookshelf', shelf: true, lockFlag: 'secret', lockedMsg: 'The shelf is fixed to the wall... something is missing.' },
];

export const ITEM_PLACEMENTS = [
  { id: 'g_note', type: 'doc', doc: 'gate_note', x: 0, z: 35 },
  { id: 'g_key',  type: 'brass_key', x: -9, z: 25 },
  { id: 'g_bat',  type: 'battery', x: 10.5, z: 28 },
  { id: 'g_cry',  type: 'crystal', x: 11.5, z: 19.5 },
  { id: 'g_ammo', type: 'ammo', x: -11, z: 34, qty: 4 },
  { id: 'h_med',  type: 'medkit', x: -7.4, z: 2.4 },
  { id: 'h_cry',  type: 'crystal', x: 7.6, z: 1.6 },
  { id: 'h_ammo', type: 'ammo', x: -4, z: 14.6, qty: 3 },
  { id: 'c_doc',  type: 'doc', doc: 'corridor_scrap', x: 12, z: 8 },
  { id: 'c_bat',  type: 'battery', x: 20, z: 8.7 },
  { id: 'c_cry',  type: 'crystal', x: 23.6, z: 8 },
  { id: 'l_doc',  type: 'doc', doc: 'library_diary', x: 33, z: 8.2 },
  { id: 'l_doc2', type: 'doc', doc: 'symbol_hint', x: 29, z: 1.4 },
  { id: 'l_ammo', type: 'ammo', x: 38.6, z: 13, qty: 4 },
  { id: 'l_bat',  type: 'battery', x: 27, z: 3 },
  { id: 'l_cry',  type: 'crystal', x: 38, z: 1.8 },
  { id: 'l_med',  type: 'medkit', x: 36.5, z: 1.8 },
  { id: 'l_ammo2', type: 'ammo', x: 39.8, z: 1.2, qty: 5 },
  { id: 'o_doc',  type: 'doc', doc: 'office_memo', x: -20.6, z: 3.5 },
  { id: 'o_cry',  type: 'crystal', x: -19.2, z: 3.4 },
  { id: 'o_med',  type: 'medkit', x: -12, z: 14.6 },
  { id: 'o_ammo', type: 'ammo', x: -23.4, z: 14.4, qty: 4 },
  { id: 'k_doc',  type: 'doc', doc: 'kitchen_note', x: -15, z: -8 },
  { id: 'k_key',  type: 'bedroom_key', x: -10.6, z: -15.4 },
  { id: 'k_gear', type: 'gear', x: -23.8, z: -14.6, req: 'cabinet' },
  { id: 'k_bat',  type: 'battery', x: -12, z: -1.8 },
  { id: 'k_med',  type: 'medkit', x: -23.5, z: -2 },
  { id: 'k_cry',  type: 'crystal', x: -20.5, z: -16.2 },
  { id: 'k_ammo', type: 'ammo', x: -13, z: -16.4, qty: 4 },
  { id: 'b_doc',  type: 'doc', doc: 'bedroom_diary', x: 30.6, z: -16.8 },
  { id: 'b_gear', type: 'gear', x: 36.5, z: -15.5 },
  { id: 'b_cry',  type: 'crystal', x: 39.2, z: -9 },
  { id: 'b_ammo', type: 'ammo', x: 27.4, z: -3.4, qty: 5 },
  { id: 'b_bat',  type: 'battery', x: 38.8, z: -2.2 },
  { id: 'b_med',  type: 'medkit', x: 29.5, z: -12.5 },
  { id: 'm_doc',  type: 'doc', doc: 'lab_log', x: 12, z: -3.2 },
  { id: 'm_ammo', type: 'ammo', x: 22.8, z: -2.4, qty: 5 },
  { id: 'm_med',  type: 'medkit', x: 10.5, z: -16.2 },
  { id: 'm_cry1', type: 'crystal', x: 13.2, z: -13, req: 'machine' },
  { id: 'm_cry2', type: 'crystal', x: 20.8, z: -13, req: 'machine' },
  { id: 'm_doc2', type: 'doc', doc: 'lab_vault', x: 17, z: -11.2, req: 'machine' },
  { id: 'x_cry',  type: 'crystal', x: -7.4, z: -15.6 },
  { id: 'x_doc',  type: 'doc', doc: 'cellar_tape', x: 7, z: -2.6 },
  { id: 'x_ammo', type: 'ammo', x: 7.4, z: -5, qty: 4 },
];

export const WARDROBES = [
  { id: 'w_bed', x: 39.6, z: -17.1, rot: 0 }, { id: 'w_kit', x: -23.4, z: -17.1, rot: 0 },
  { id: 'w_hall', x: 7.7, z: 14.2, rot: -Math.PI / 2 },
  { id: 'w_lib',  x: 39.6, z: 14.4, rot: Math.PI },
  { id: 'w_off',  x: -23.4, z: 1.0, rot: 0 },
];
export const SAVEPOINTS = [
  { id: 's_hall', x: -6.6, z: 13.4 }, { id: 's_lib', x: 27.4, z: 14.4 }, { id: 's_off', x: -10.6, z: 14.4 }, { id: 's_kit', x: -10.6, z: -3 }, { id: 's_bed', x: 27.4, z: -2.6 }, { id: 's_lab', x: 11, z: -2.4 },
];
export const SAFE = { x: -24.3, z: 8, rot: Math.PI / 2 };
export const SYMBOL_PANEL = { x: 33, z: 15.4 };
export const STOVE = { x: -22, z: -16 };
export const LEVER = { x: 26.1, z: -5.5 };
export const MACHINE = { x: 17, z: -14 };
export const ALTAR = { x: 0, z: -15.4 };
export const PILLARS = [[-4.8, -6], [4.8, -6], [-4.8, -11.5], [4.8, -11.5]];

export const NAV_NODES = [
  [0, 13], [-5, 8], [5, 8], [0, 3], [7.4, 8], [11, 8], [17, 8], [23, 8], [27, 8], [32, 12], [32, 4], [38, 8], [36, 13], [27, 3], [-6, 3], [6, 12],
];
export const WATCHER_PATROL = [[0, 13], [0, 3], [7.4, 8], [17, 8], [27, 8], [33, 12], [36, 8], [32, 4], [27, 8], [17, 8], [7.4, 8], [-5, 8]];
export const CRAWLER_SPAWNS = [[30, 14], [36, 12], [28, 5]];
export const PLAYER_START = { x: 0, z: 37, ry: Math.PI };

export const DOCS = {
  kitchen_note: { title: 'Kitchen Note', text: "The cook never cooked for guests.\n\nThe three dials on the stove were set by the Archivist's daughter. 'Her birthday', he wrote on the fridge. He used it for everything.\n\nThe cabinet beside the stove holds what the house keeps from visitors: a brass gear.\n\nThere are two such gears. One is upstairs, in the guest rooms." },
  bedroom_diary: { title: "Mira's Diary", text: "I was seven when we arrived.\n\nPapa says the guest rooms are for people who stay forever. I do not like how the dark moves in here. It follows the corners. It hates the flashlight.\n\nMy birthday is on the 2nd of September. Papa uses 2-0-9 for everything. Everything.\n\nThere is a lever by the west wall. Papa says never to pull it." },
  lab_log: { title: 'Laboratory Log', text: "EXPERIMENT 7 — MEMORY EXTRACTION.\n\nThe crystals are not minerals. They are memories, solidified.\n\nThe machine needs two brass gears to open the vault. Without it, nobody can reach the last crystals.\n\nSubject W resists. Subject W keeps asking for a way home." },
  lab_vault: { title: 'Vault Note — Subject W', text: "She came here as a child and never left.\n\nWhat you call the Possessed one is not a monster. It is Subject W: every fear and every forgotten day, given a body.\n\nGather every crystal you can. The more you remember, the less it can take.\n\nThere are eleven in total." },
  gate_note: { title: "Willow's Note", text: "The gate was open.\n\nI don't remember driving here. I don't remember anything after the rain.\n\nThe house looks like the one from my dreams... the one with a light in the top window.\n\nThat window is on now.\n\n— W." },
  corridor_scrap: { title: 'Torn Page', text: "IT FOLLOWS THE LIGHT.\n\nIt cannot see what it cannot find. The old wardrobes are deep enough to hide in. Hold your breath. Wait.\n\nIf you can't hide — RUN. It is faster than it looks, but not faster than you.\n\nThe small ones die with a single spark." },
  library_diary: { title: "The Archivist's Diary", text: "Day 112.\n\nThe clock in the office stopped the night everything went wrong. The hands never moved again.\n\nFOUR for the hour I arrived.\nONE for the night I tried to leave.\nSEVEN for the years I have been here.\n\nI locked the cellar key inside the office safe. Whatever sleeps down there must never wake." },
  symbol_hint: { title: 'Scratched Wall Note', text: "THE MOON WATCHES.\nTHE EYE REMEMBERS.\nTHE FOX RETURNS.\n\n(The panel on the south wall has four symbols. Order matters.)" },
  office_memo: { title: 'Office Memo', text: "To whoever finds this:\n\nThe house feeds on memories. Every crystal I found was a piece of someone who came before.\n\nGather them. If you hold enough of them — five, maybe more — you will remember who you are when you stand before the altar.\n\nIf not... it will wear your face.\n\nThe safe code is in the library." },
  cellar_tape: { title: 'Cursed Memories — Tape 7', text: "[static]\n\n\"...she came back. They always come back.\n\nThe thing on the altar is not a monster. It is what is left of the girl who never left this house. It wants someone to remember her.\n\nBut if you forget your own name down there... it will take yours.\"\n\n[static]" },
};
