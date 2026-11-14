import * as THREE from 'three';
import { lambert, basic } from '../environments/Retro.js';
const bx = (w, h, d, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); return o; };

/** THE CRAWLERS — small hostile creatures that skitter along the floor. */
export function buildCrawler() {
  const skin = lambert({ color: 0x2a1c1a }), leg = lambert({ color: 0x14100f }), eye = basic({ color: 0xff2a2a });
  const g = new THREE.Group();
  g.add(bx(0.55, 0.28, 0.9, skin, 0, 0.3, 0));
  g.add(bx(0.4, 0.25, 0.32, skin, 0, 0.32, 0.55));
  g.add(bx(0.07, 0.05, 0.04, eye, -0.1, 0.38, 0.72)); g.add(bx(0.07, 0.05, 0.04, eye, 0.1, 0.38, 0.72));
  const legs = [];
  for (let i = 0; i < 3; i++) for (const s of [-1, 1]) { const l = bx(0.5, 0.05, 0.05, leg, s * 0.4, 0.2, -0.25 + i * 0.3); l.rotation.z = -s * 0.5; g.add(l); legs.push(l); }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { group: g, update(t, speed) { legs.forEach((l, i) => { l.rotation.y = Math.sin(t * 18 + i) * 0.4 * (speed > 0 ? 1 : 0.1); }); } };
}
