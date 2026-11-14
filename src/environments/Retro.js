// PS1 look: vertex snapping ("jitter"), dithering, nearest-neighbour procedural textures.
import * as THREE from 'three';

export const retroUniforms = { uSnap: { value: 0 } }; // 0 = off; otherwise grid cells across the screen width

export function patchMaterial(m) {
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uSnap = retroUniforms.uSnap;
    shader.vertexShader = 'uniform float uSnap;\n' + shader.vertexShader.replace(
      '#include <project_vertex>',
      `#include <project_vertex>
       if (uSnap > 0.5 && gl_Position.w > 0.2) {
         vec2 g = vec2(uSnap, uSnap * 0.75);
         gl_Position.xy = floor(gl_Position.xy / gl_Position.w * g + 0.5) / g * gl_Position.w;
       }`
    );
  };
  m.customProgramCacheKey = () => 'retro-snap';
  return m;
}
export const lambert = (o = {}) => patchMaterial(new THREE.MeshLambertMaterial({ dithering: true, flatShading: true, ...o }));
export const basic = (o = {}) => patchMaterial(new THREE.MeshBasicMaterial({ dithering: true, ...o }));

// ---------- procedural textures ----------
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const speckle = (c, s, r, cols, n) => { for (let i = 0; i < n; i++) { c.fillStyle = cols[(r() * cols.length) | 0]; c.fillRect((r() * s) | 0, (r() * s) | 0, Math.max(1, s / 32), Math.max(1, s / 32)); } };

const DEFS = {
  wood: (c, s, r) => { c.fillStyle = '#4b2f1b'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#3a2312', '#5c3a22', '#2e1a0c'], s * 3); c.fillStyle = '#20110a'; for (let i = 0; i < 4; i++) c.fillRect(0, (i * s) / 4, s, Math.max(1, s / 32)); c.fillRect(s / 2, 0, Math.max(1, s / 32), s / 4); },
  darkwood: (c, s, r) => { c.fillStyle = '#2a1a10'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#1c1008', '#3a2616'], s * 3); c.fillStyle = '#120a05'; c.fillRect(0, 0, Math.max(1, s / 16), s); },
  wall: (c, s, r) => { c.fillStyle = '#3a1828'; c.fillRect(0, 0, s, s); c.fillStyle = '#4a2236'; for (let i = 0; i < 4; i++) c.fillRect((i * s) / 4, 0, s / 8, s); c.fillStyle = '#6a3a4c'; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) c.fillRect((i * s) / 4 + s / 16, (j * s) / 4 + s / 16, Math.max(1, s / 32), Math.max(1, s / 32)); speckle(c, s, r, ['#2a0f1c', '#44202e'], s * 2); c.fillStyle = '#1a0c10'; c.fillRect(0, s - s / 8, s, s / 8); },
  carpet: (c, s, r) => { c.fillStyle = '#6a0e1a'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#520a14', '#7e1424'], s * 4); c.strokeStyle = '#b8902a'; c.lineWidth = Math.max(1, s / 32); c.beginPath(); c.moveTo(s / 2, s * 0.1); c.lineTo(s * 0.9, s / 2); c.lineTo(s / 2, s * 0.9); c.lineTo(s * 0.1, s / 2); c.closePath(); c.stroke(); c.fillStyle = '#b8902a'; c.fillRect(s / 2 - 1, s / 2 - 1, Math.max(2, s / 16), Math.max(2, s / 16)); },
  stone: (c, s, r) => { c.fillStyle = '#44444c'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#33333a', '#55555e', '#2a2a30'], s * 4); c.fillStyle = '#18181c'; c.fillRect(0, 0, s, Math.max(1, s / 24)); c.fillRect(0, s / 2, s, Math.max(1, s / 24)); c.fillRect(0, 0, Math.max(1, s / 24), s / 2); c.fillRect(s / 2, s / 2, Math.max(1, s / 24), s / 2); },
  grass: (c, s, r) => { c.fillStyle = '#1b3518'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#27502a', '#10240f', '#2f5a2c', '#33301a'], s * 6); },
  brick: (c, s, r) => { c.fillStyle = '#4e2a22'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#5e3328', '#3c1f19'], s * 3); c.fillStyle = '#1e1210'; for (let i = 0; i < 4; i++) { c.fillRect(0, (i * s) / 4, s, Math.max(1, s / 32)); const o = i % 2 ? 0 : s / 2; c.fillRect(o, (i * s) / 4, Math.max(1, s / 32), s / 4); } },
  plaster: (c, s, r) => { c.fillStyle = '#2a232e'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#1e1822', '#352d3a'], s * 3); },
  tile: (c, s, r) => { c.fillStyle = '#2d2d36'; c.fillRect(0, 0, s, s); c.fillStyle = '#23232b'; c.fillRect(0, 0, s / 2, s / 2); c.fillRect(s / 2, s / 2, s / 2, s / 2); speckle(c, s, r, ['#18181e', '#3a3a44'], s * 3); },
  metal: (c, s, r) => { c.fillStyle = '#4a4d55'; c.fillRect(0, 0, s, s); speckle(c, s, r, ['#3a3d44', '#5c606a'], s * 2); c.fillStyle = '#22242a'; c.fillRect(0, s / 2, s, Math.max(1, s / 32)); },
  iron: (c, s) => { c.fillStyle = '#111114'; c.fillRect(0, 0, s, s); c.fillStyle = '#1e1e24'; c.fillRect(s / 4, 0, Math.max(1, s / 16), s); },
};

export const Tex = {
  quality: 'medium', cache: {},
  size() { return { low: 32, medium: 64, high: 128 }[this.quality] || 64; },
  get(name) {
    if (this.cache[name]) return this.cache[name].tex;
    const canvas = document.createElement('canvas');
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    this.cache[name] = { canvas, tex };
    this.draw(name);
    return tex;
  },
  draw(name) {
    const { canvas, tex } = this.cache[name], s = this.size();
    canvas.width = canvas.height = s;
    const c = canvas.getContext('2d'); c.imageSmoothingEnabled = false;
    let seed = 0; for (const ch of name) seed = (seed * 31 + ch.charCodeAt(0)) | 0;
    (DEFS[name] || DEFS.plaster)(c, s, rng(seed));
    tex.dispose(); tex.needsUpdate = true;
  },
  setQuality(q) { if (q === this.quality) return; this.quality = q; Object.keys(this.cache).forEach((n) => this.draw(n)); },
};

const matCache = {};
export function surf(name, color = 0xffffff, extra = {}) {
  const k = name + color + JSON.stringify(extra);
  if (!matCache[k]) matCache[k] = lambert({ map: Tex.get(name), color, ...extra });
  return matCache[k];
}
export function solid(color, extra = {}) {
  const k = 's' + color + JSON.stringify(extra);
  if (!matCache[k]) matCache[k] = lambert({ color, ...extra });
  return matCache[k];
}
export function glow(color, extra = {}) {
  const k = 'g' + color + JSON.stringify(extra);
  if (!matCache[k]) matCache[k] = basic({ color, ...extra });
  return matCache[k];
}
