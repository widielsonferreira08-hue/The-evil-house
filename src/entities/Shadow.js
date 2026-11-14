import * as THREE from 'three';
import { basic } from '../environments/Retro.js';
const bx = (w, h, d, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); return o; };

/** THE SHADOWS — dark creatures that stalk unlit areas and dissolve in flashlight beams. */
export function buildShadow() {
  const body = basic({ color: 0x050308, transparent: true, opacity: 0.85 }), eye = basic({ color: 0xffffff });
  const g = new THREE.Group(), m = new THREE.Group(); g.add(m);
  m.add(bx(0.7, 1.3, 0.3, body, 0, 1.2, 0)); m.add(bx(0.5, 0.55, 0.3, body, 0, 2.15, 0));
  m.add(bx(0.18, 1.5, 0.12, body, -0.5, 1.2, 0)); m.add(bx(0.18, 1.5, 0.12, body, 0.5, 1.2, 0));
  m.add(bx(0.25, 0.9, 0.2, body, -0.2, 0.45, 0)); m.add(bx(0.25, 0.9, 0.2, body, 0.2, 0.45, 0));
  m.add(bx(0.12, 0.07, 0.04, eye, -0.12, 2.2, 0.17)); m.add(bx(0.12, 0.07, 0.04, eye, 0.12, 2.2, 0.17));
  return { group: g, mats: [body], update(t, moving, fade) {
    m.position.y = Math.sin(t * 3) * 0.05; m.rotation.z = Math.sin(t * 2.2) * 0.06 + (moving ? Math.sin(t * 9) * 0.08 : 0);
    body.opacity = 0.85 * (1 - fade); m.scale.set(1 + fade * 0.4, 1 - fade * 0.3, 1);
  } };
}
