import * as THREE from 'three';
import { surf, solid, glow, basic } from './Retro.js';

/** Box with UVs scaled so textures tile at ~`tile` world units per repeat. */
export function box(w, h, d, mat, x = 0, y = 0, z = 0, tile = 2) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, (uv.getX(k) * dims[f][0]) / tile, (uv.getY(k) * dims[f][1]) / tile); }
  const m = new THREE.Mesh(g, mat);
  m.position.set(x, y, z);
  return m;
}
export function plane(w, d, mat, x, y, z, facing = 'up', tile = 2) {
  const g = new THREE.PlaneGeometry(w, d);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * w) / tile, (uv.getY(i) * d) / tile);
  const m = new THREE.Mesh(g, mat);
  m.rotation.x = facing === 'up' ? -Math.PI / 2 : Math.PI / 2;
  m.position.set(x, y, z);
  return m;
}
const cyl = (rt, rb, h, seg, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat); m.position.set(x, y, z); return m; };

export function candle(x, y, z) {
  const g = new THREE.Group();
  g.add(cyl(0.05, 0.06, 0.25, 5, solid(0xe8dcc0), 0, 0.125, 0));
  const f = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 4), glow(0xffb040)); f.position.y = 0.32; g.add(f);
  g.userData.flame = f;
  g.position.set(x, y, z);
  return g;
}
export function bookshelf(w = 3, h = 3.2, rot = 0, seed = 1) {
  const g = new THREE.Group(), wood = surf('darkwood', 0xffffff, {}), d = 0.6;
  g.add(box(w, h, 0.08, wood, 0, h / 2, -d / 2 + 0.04));
  g.add(box(0.08, h, d, wood, -w / 2 + 0.04, h / 2, 0));
  g.add(box(0.08, h, d, wood, w / 2 - 0.04, h / 2, 0));
  let s = seed; const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const cols = [0x5a1a1a, 0x1a3a5a, 0x3a2a1a, 0x2a4a2a, 0x4a2a5a, 0x6a5a2a];
  const rows = 5;
  for (let i = 0; i <= rows; i++) {
    const y = (i * (h - 0.1)) / rows + 0.05;
    g.add(box(w, 0.06, d, wood, 0, y, 0));
    if (i === rows) break;
    let x = -w / 2 + 0.15;
    while (x < w / 2 - 0.2) {
      const bw = 0.08 + r() * 0.1, bh = 0.35 + r() * 0.2;
      if (r() > 0.12) g.add(box(bw, bh, 0.35, solid(cols[(r() * cols.length) | 0]), x + bw / 2, y + 0.03 + bh / 2, 0.02));
      x += bw + 0.01;
    }
  }
  g.rotation.y = rot;
  return g;
}
export function desk(w = 2.4, d = 1.1) {
  const g = new THREE.Group(), wood = surf('darkwood');
  g.add(box(w, 0.1, d, wood, 0, 0.9, 0));
  g.add(box(0.1, 0.9, d - 0.1, wood, -w / 2 + 0.1, 0.45, 0)); g.add(box(0.1, 0.9, d - 0.1, wood, w / 2 - 0.1, 0.45, 0));
  g.add(box(w - 0.2, 0.7, 0.08, wood, 0, 0.55, -d / 2 + 0.1));
  return g;
}
export function table(w = 2, d = 1.2, h = 0.85) {
  const g = new THREE.Group(), wood = surf('wood');
  g.add(box(w, 0.1, d, wood, 0, h, 0));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(0.12, h, 0.12, wood, sx * (w / 2 - 0.12), h / 2, sz * (d / 2 - 0.12)));
  return g;
}
export function chair() {
  const g = new THREE.Group(), wood = surf('darkwood');
  g.add(box(0.6, 0.08, 0.6, wood, 0, 0.5, 0)); g.add(box(0.6, 0.8, 0.08, wood, 0, 0.9, -0.28));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(0.07, 0.5, 0.07, wood, sx * 0.25, 0.25, sz * 0.25));
  return g;
}
export function wardrobe(rot = 0) {
  const g = new THREE.Group(), wood = surf('darkwood');
  g.add(box(1.5, 2.8, 1.0, wood, 0, 1.4, 0));
  g.add(box(0.05, 2.5, 0.05, solid(0x0a0504), 0, 1.4, 0.52));
  g.add(box(0.1, 0.25, 0.06, solid(0xb8902a), -0.12, 1.4, 0.54)); g.add(box(0.1, 0.25, 0.06, solid(0xb8902a), 0.12, 1.4, 0.54));
  g.rotation.y = rot;
  return g;
}
export function safeBox(rot = 0) {
  const g = new THREE.Group();
  g.add(box(0.9, 1.0, 0.9, surf('metal'), 0, 0.5, 0));
  g.add(cyl(0.18, 0.18, 0.08, 8, solid(0xb8902a), 0, 0.6, 0.47)).children.at(-1).rotation.x = Math.PI / 2;
  g.add(box(0.5, 0.18, 0.04, glow(0x33ff66), 0, 0.88, 0.46));
  g.rotation.y = rot;
  return g;
}
export function savePoint() {
  const g = new THREE.Group();
  g.add(box(0.9, 0.5, 0.6, surf('metal'), 0, 0.25, 0));
  g.add(box(0.7, 0.04, 0.4, glow(0xa64dff), 0, 0.52, 0));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.03, 4, 8), glow(0xc58bff)); ring.rotation.x = Math.PI / 2; ring.position.y = 0.9; g.add(ring);
  g.userData.ring = ring;
  return g;
}
export function portrait(seed = 1, w = 1.1, h = 1.5) {
  const c = document.createElement('canvas'); c.width = 24; c.height = 32;
  const x = c.getContext('2d'); x.fillStyle = '#1a1210'; x.fillRect(0, 0, 24, 32);
  x.fillStyle = ['#6a5a48', '#58504a', '#6a4a40'][seed % 3]; x.fillRect(7, 8, 10, 12); x.fillRect(4, 22, 16, 10);
  x.fillStyle = '#000'; x.fillRect(9, 12, 2, 2); x.fillRect(14, 12, 2, 2);
  if (seed % 2) { x.fillStyle = '#ff2020'; x.fillRect(9, 12, 1, 1); x.fillRect(14, 12, 1, 1); }
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  const g = new THREE.Group();
  g.add(box(w + 0.2, h + 0.2, 0.08, solid(0x6a4a14), 0, 0, 0));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), basic({ map: t, color: 0x888888 })); p.position.z = 0.05; g.add(p);
  return g;
}
export function statue(rot = 0) {
  const g = new THREE.Group(), st = surf('stone', 0x9a9aa8);
  g.add(box(1.2, 1.2, 1.2, st, 0, 0.6, 0));
  g.add(box(0.7, 1.0, 0.5, st, 0, 1.7, 0));
  g.add(box(0.5, 0.45, 0.5, st, 0, 2.4, 0.05));
  for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.35, 4), st); e.position.set(sx * 0.17, 2.8, 0.05); g.add(e); g.add(box(0.07, 0.05, 0.03, glow(0xff3030), sx * 0.12, 2.45, 0.32)); }
  g.rotation.y = rot;
  return g;
}
export function tree(h = 5, seed = 1) {
  const g = new THREE.Group(), dead = solid(0x1a1410);
  g.add(cyl(0.12, 0.3, h, 5, dead, 0, h / 2, 0));
  for (let i = 0; i < 4; i++) { const b = cyl(0.04, 0.1, 2, 4, dead, 0, 0, 0); b.position.set(Math.sin(i + seed) * 0.7, h * (0.55 + i * 0.1), Math.cos(i * 2 + seed) * 0.7); b.rotation.z = Math.sin(i + seed) * 1.0; b.rotation.x = Math.cos(i + seed) * 1.0; g.add(b); }
  return g;
}
export function pillar(h = 4.5) { const g = new THREE.Group(); g.add(cyl(0.45, 0.5, h, 6, surf('stone', 0x8888aa), 0, h / 2, 0)); g.add(box(1.2, 0.3, 1.2, surf('stone'), 0, 0.15, 0)); return g; }
export function altar() {
  const g = new THREE.Group();
  g.add(box(3, 0.6, 2, surf('stone', 0x8a7aa8), 0, 0.3, 0));
  g.add(box(2, 0.9, 1.2, surf('stone', 0x9a8ab8), 0, 1.05, 0));
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.05, 12), glow(0xc0b0ff)); disc.position.set(0, 1.55, 0); disc.rotation.x = 0.4; g.add(disc);
  g.userData.disc = disc;
  return g;
}
export function crystalMesh() {
  const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), glow(0xb26bff)); m.scale.y = 1.5;
  return m;
}
export function itemMesh(type) {
  const g = new THREE.Group();
  switch (type) {
    case 'crystal': g.add(crystalMesh()); break;
    case 'brass_key': case 'cellar_key': {
      const c = type === 'cellar_key' ? 0x9aa0b0 : 0xd8b030;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 4, 6), solid(c)); g.add(ring);
      const s = box(0.05, 0.3, 0.05, solid(c), 0, -0.2, 0); g.add(s); g.add(box(0.12, 0.05, 0.05, solid(c), 0.05, -0.3, 0)); break;
    }
    case 'battery': g.add(cyl(0.09, 0.09, 0.3, 6, solid(0x4a8a3a))); g.add(cyl(0.04, 0.04, 0.06, 5, solid(0xcccccc), 0, 0.17, 0)); break;
    case 'medkit': g.add(box(0.4, 0.28, 0.2, solid(0xe8e8e8))); g.add(box(0.26, 0.07, 0.21, solid(0xc01818))); g.add(box(0.07, 0.2, 0.21, solid(0xc01818))); break;
    case 'ammo': g.add(box(0.3, 0.18, 0.2, solid(0xc9a02a))); g.add(box(0.12, 0.1, 0.22, solid(0x3a2a10))); break;
    default: g.add(box(0.32, 0.03, 0.42, solid(0xe8dcc0))); g.add(box(0.22, 0.032, 0.02, solid(0x222222), 0, 0, 0.1)); g.add(box(0.22, 0.032, 0.02, solid(0x222222), 0, 0, 0)); g.children.forEach((c) => (c.rotation.x = 0)); // document
  }
  return g;
}
export function windowGlow(w = 1.2, h = 1.8, color = 0xc88a3a) {
  const g = new THREE.Group();
  g.add(box(w + 0.2, h + 0.2, 0.1, solid(0x120a0a)));
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glow(color)); p.position.z = 0.06; g.add(p);
  g.add(box(0.05, h, 0.02, solid(0x120a0a), 0, 0, 0.08)); g.add(box(w, 0.05, 0.02, solid(0x120a0a), 0, 0.2, 0.08));
  return g;
}
export function chandelier() {
  const g = new THREE.Group();
  g.add(cyl(0.03, 0.03, 1, 4, solid(0x222222), 0, 0.5, 0));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.04, 4, 8), solid(0xb8902a)); ring.rotation.x = Math.PI / 2; g.add(ring);
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; g.add(candle(Math.cos(a) * 0.6, 0.02, Math.sin(a) * 0.6)); }
  return g;
}
