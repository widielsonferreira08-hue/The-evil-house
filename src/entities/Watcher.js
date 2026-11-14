import * as THREE from 'three';
import { lambert, basic } from '../environments/Retro.js';
const bx = (w, h, d, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); return o; };

/** THE WATCHER — tall dark humanoid with glowing white eyes. */
export function buildWatcher() {
  const dark = lambert({ color: 0x0b0a10 }), coat = lambert({ color: 0x14121a }), eye = basic({ color: 0xffffff });
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const legs = [], arms = [];
  for (const s of [-1, 1]) {
    const l = new THREE.Group(); l.position.set(s * 0.22, 1.7, 0); l.add(bx(0.2, 1.7, 0.22, dark, 0, -0.85, 0)); body.add(l); legs.push(l);
    const a = new THREE.Group(); a.position.set(s * 0.5, 3.0, 0); a.add(bx(0.14, 1.9, 0.14, dark, 0, -0.95, 0)); a.add(bx(0.1, 0.4, 0.1, dark, 0, -2.0, 0.05)); body.add(a); arms.push(a);
  }
  body.add(bx(0.8, 1.4, 0.4, coat, 0, 2.5, 0));
  const skirt = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.2, 5), coat); skirt.position.set(0, 1.75, 0); skirt.rotation.y = 0.3; body.add(skirt);
  const head = new THREE.Group(); head.position.set(0, 3.5, 0.05); body.add(head);
  head.add(bx(0.38, 0.62, 0.34, dark));
  head.add(bx(0.09, 0.05, 0.04, eye, -0.1, 0.08, 0.18)); head.add(bx(0.09, 0.05, 0.04, eye, 0.1, 0.08, 0.18));
  const glow = new THREE.PointLight(0xffffff, 0.0, 6); head.add(glow);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { group: g, update(t, moving, chasing) {
    const s = Math.sin(t * (chasing ? 8 : 4)) * (moving ? 0.6 : 0);
    legs[0].rotation.x = s; legs[1].rotation.x = -s; arms[0].rotation.x = -s * 0.5 + (chasing ? -0.9 : 0); arms[1].rotation.x = s * 0.5 + (chasing ? -0.9 : 0);
    body.rotation.x = chasing ? 0.25 : 0; head.rotation.z = Math.sin(t * 1.3) * 0.1; body.position.y = moving ? Math.abs(Math.cos(t * 4)) * 0.05 : 0;
  } };
}
