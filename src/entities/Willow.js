// Procedural low-poly Willow (and her corrupted twin). Built from boxes/cones, articulated, animated by code.
import * as THREE from 'three';
import { lambert, basic } from '../environments/Retro.js';

function ribTexture(possessed) {
  const c = document.createElement('canvas'); c.width = 32; c.height = 32;
  const x = c.getContext('2d');
  x.fillStyle = '#17121f'; x.fillRect(0, 0, 32, 32);
  x.fillStyle = possessed ? '#d9a0ff' : '#b58be0';
  x.fillRect(15, 3, 2, 26);
  for (let i = 0; i < 5; i++) { x.fillRect(6 + i, 6 + i * 4, 20 - i * 2, 2); }
  x.fillStyle = possessed ? '#6a1fb0' : '#7a3fc0'; x.fillRect(2, 0, 3, 32); x.fillRect(27, 0, 3, 32);
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
export function spiralTexture() {
  const c = document.createElement('canvas'); c.width = 32; c.height = 32;
  const x = c.getContext('2d'); x.fillStyle = '#f4eaff'; x.fillRect(0, 0, 32, 32);
  x.strokeStyle = '#7a1fd0'; x.lineWidth = 2; x.beginPath();
  for (let a = 0; a < 18; a += 0.2) { const r = a * 0.85; x.lineTo(16 + Math.cos(a) * r, 16 + Math.sin(a) * r); }
  x.stroke();
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const bx = (w, h, d, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); return m; };
const cone = (r, h, seg, mat, x, y, z, rx = 0, rz = 0) => { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat); m.position.set(x, y, z); m.rotation.x = rx; m.rotation.z = rz; return m; };

export function buildFox({ possessed = false } = {}) {
  const P = possessed;
  const fur = lambert({ color: P ? 0x3a1a5e : 0xf08a1c }), cream = lambert({ color: P ? 0x6a4a8e : 0xf4e2c0 });
  const black = lambert({ color: P ? 0x15101e : 0x1c1a22 }), hood = lambert({ color: P ? 0x1a1228 : 0x201a2c });
  const purple = lambert({ color: P ? 0x7a2fd0 : 0x8a4fd0 }), silver = lambert({ color: 0xc8c8d4 });
  const shoe = lambert({ color: 0x15151a }), sole = lambert({ color: 0xcfcfd8 });
  const eyeMat = P ? basic({ map: spiralTexture() }) : basic({ color: 0x2fbf4a });
  const ribs = ribTexture(P);
  const front = lambert({ map: ribs }), back = lambert({ map: ribs, color: 0xaaaaaa });
  const group = new THREE.Group(), body = new THREE.Group(); group.add(body);
  const parts = {};

  // legs
  for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(s * 0.26, 0.95, 0);
    leg.add(bx(0.46, 0.85, 0.5, black, 0, -0.42, 0));
    leg.add(bx(0.4, 0.22, 0.62, shoe, 0, -0.84, 0.08)); leg.add(bx(0.42, 0.08, 0.66, sole, 0, -0.93, 0.08));
    leg.add(bx(0.05, 0.4, 0.05, P ? basic({ color: 0xcfa0ff }) : lambert({ color: 0xd8d8e0 }), s * 0.2, -0.4, 0.26));
    body.add(leg); parts[s < 0 ? 'legR' : 'legL'] = leg;
  }
  // torso (hoodie with rib print)
  const torso = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.85, 0.62), [hood, hood, hood, hood, front, back]);
  torso.position.set(0, 1.38, 0); body.add(torso); parts.torso = torso;
  body.add(bx(1.04, 0.14, 0.66, hood, 0, 0.98, 0));
  // arms
  for (const s of [-1, 1]) {
    const arm = new THREE.Group(); arm.position.set(s * 0.65, 1.7, 0);
    arm.add(bx(0.34, 0.8, 0.36, hood, 0, -0.38, 0)); arm.add(bx(0.1, 0.6, 0.02, purple, s * 0.0, -0.36, 0.19));
    arm.add(bx(0.28, 0.24, 0.28, fur, 0, -0.86, 0.02));
    if (P) for (let i = -1; i <= 1; i++) arm.add(cone(0.035, 0.28, 3, silver, i * 0.08, -1.08, 0.1, Math.PI / 2.6, 0));
    body.add(arm); parts[s < 0 ? 'armR' : 'armL'] = arm;
  }
  // head
  const head = new THREE.Group(); head.position.set(0, 2.12, 0); body.add(head); parts.head = head;
  head.add(bx(1.0, 0.8, 0.82, fur, 0, 0, 0));
  head.add(bx(0.56, 0.34, 0.42, cream, 0, -0.18, 0.36));
  head.add(bx(0.14, 0.1, 0.1, black, 0, -0.07, 0.58));
  head.add(bx(0.46, 0.5, 0.08, cream, 0, -0.1, 0.4));
  for (const s of [-1, 1]) {
    head.add(bx(0.2, P ? 0.26 : 0.22, 0.05, eyeMat, s * 0.26, 0.08, 0.42));
    head.add(bx(0.24, 0.05, 0.05, black, s * 0.26, P ? 0.24 : 0.2, 0.43));
    head.add(cone(0.3, 0.8, 4, fur, s * 0.34, 0.8, -0.05, 0, -s * 0.15));
    head.add(cone(0.18, 0.55, 4, cream, s * 0.33, 0.74, 0.03, 0, -s * 0.15));
    head.add(bx(0.12, 0.5, 0.5, black, s * 0.52, -0.05, -0.05));  // hair
    head.add(cone(0.08, 0.32, 3, black, s * 0.56, -0.38, 0.1, 0, s * 0.5));
  }
  // beanie + spikes
  head.add(bx(1.08, 0.42, 0.96, black, 0, 0.5, -0.02));
  head.add(bx(1.1, 0.12, 0.12, black, 0, 0.28, 0.46));
  const spikePos = [[-0.45, 0.72, 0.1], [0, 0.74, 0.2], [0.45, 0.72, 0.1], [-0.3, 0.76, -0.3], [0.3, 0.76, -0.3], [-0.56, 0.5, 0.3], [0.56, 0.5, 0.3], [-0.2, 0.48, 0.5], [0.2, 0.48, 0.5]];
  spikePos.forEach(([x, y, z]) => head.add(cone(0.07, 0.26, 4, silver, x, y, z, z > 0.35 ? Math.PI / 2.4 : 0, x > 0.5 ? -1.2 : x < -0.5 ? 1.2 : 0)));
  if (P) { // fangs
    for (let i = -2; i <= 2; i++) head.add(cone(0.035, 0.12, 3, basic({ color: 0xffffff }), i * 0.09, -0.34, 0.56, Math.PI, 0));
    head.add(bx(0.42, 0.05, 0.05, black, 0, -0.3, 0.58));
  }
  // tail
  const tail = new THREE.Group(); tail.position.set(0, 1.05, -0.35); body.add(tail); parts.tail = tail;
  const t1 = cone(0.38, 1.3, 5, fur, 0, 0.35, -0.55, -Math.PI / 2.6, 0); tail.add(t1);
  const t2 = cone(0.22, 0.55, 5, P ? lambert({ color: 0x9a5af0 }) : cream, 0, 0.7, -1.15, -Math.PI / 2.6, 0); tail.add(t2);
  // flashlight (right hand)
  const fl = new THREE.Group(); fl.position.set(0, -0.95, 0.18); fl.rotation.x = Math.PI / 2;
  fl.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.4, 6), lambert({ color: 0x2a2a30 })));
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.03, 6), basic({ color: 0xfff2c0 })); lens.position.y = 0.21; fl.add(lens);
  parts.armR.add(fl); parts.flashlight = fl; parts.lens = lens;
  if (P) fl.visible = false;

  // aura particles for the possessed one
  let aura = null;
  if (P) {
    const n = 40, pos = new Float32Array(n * 3);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    aura = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xb050ff, size: 0.14, sizeAttenuation: true, transparent: true, opacity: 0.85 }));
    aura.userData.seed = Array.from({ length: n }, () => Math.random() * 10);
    group.add(aura);
  }
  group.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  group.scale.setScalar(P ? 1.15 : 1);

  const api = { group, parts, anim: 'idle', t: 0, lookT: 0, hurtT: 0, deadT: 0, speed: 0, aura };
  api.setAnim = (a) => { if (api.anim !== a) { api.anim = a; if (a === 'hurt') api.hurtT = 0.45; if (a === 'death') api.deadT = 0; } };
  api.update = (dt, speed = 0) => {
    api.t += dt; const t = api.t, p = parts;
    const run = api.anim === 'run', walk = api.anim === 'walk';
    const sw = run ? 9 : 6.5, amp = run ? 0.95 : 0.6;
    let lx = 0, rx = 0, armSwing = 0, lean = 0, headY = 0, bob = 0, headX = 0;
    const reset = () => { body.rotation.set(0, 0, 0); body.position.set(0, 0, 0); p.armL.rotation.set(0, 0, 0); p.armR.rotation.set(-1.25, 0, 0); p.head.rotation.set(0, 0, 0); };
    reset();
    if (walk || run) {
      const s = Math.sin(t * sw); lx = s * amp; rx = -s * amp; armSwing = s * amp * 0.9; lean = run ? 0.18 : 0.05; bob = Math.abs(Math.cos(t * sw)) * (run ? 0.1 : 0.05);
      p.armL.rotation.x = -armSwing; p.armR.rotation.x = -1.25 + armSwing * 0.15;
    } else if (api.anim === 'idle' || api.anim === 'look') {
      bob = Math.sin(t * 2) * 0.015; p.armL.rotation.x = Math.sin(t * 2) * 0.05;
      if (api.anim === 'look') headY = Math.sin(t * 1.6) * 0.9;
    } else if (api.anim === 'scared') {
      p.armL.rotation.set(-1.6, 0, 0.5); p.armR.rotation.set(-1.7, 0, -0.5); lean = -0.12; body.position.x = Math.sin(t * 40) * 0.015; headX = 0.1;
    } else if (api.anim === 'interact') {
      p.armR.rotation.set(-1.45, 0, 0); p.armL.rotation.set(-1.0, 0, 0); lean = 0.15;
    } else if (api.anim === 'hurt') {
      api.hurtT -= dt; lean = -0.35; p.head.rotation.x = -0.3; p.armL.rotation.z = 0.8; p.armR.rotation.z = -0.8;
      if (api.hurtT <= 0) api.anim = 'idle';
    } else if (api.anim === 'death') {
      api.deadT = Math.min(1, api.deadT + dt * 1.4); body.rotation.x = -api.deadT * 1.5; body.position.y = -api.deadT * 0.5; body.position.z = -api.deadT * 0.3;
    } else if (api.anim === 'hide') { lean = 0.1; }
    p.legL.rotation.x = lx; p.legR.rotation.x = rx;
    body.rotation.x += lean; body.position.y += bob;
    p.head.rotation.y = headY; p.head.rotation.x += headX;
    p.tail.rotation.y = Math.sin(t * (walk || run ? 6 : 1.8)) * (walk || run ? 0.35 : 0.2);
    p.tail.rotation.x = run ? -0.25 : 0;
    if (aura) {
      const a = aura.geometry.attributes.position, sd = aura.userData.seed;
      for (let i = 0; i < sd.length; i++) { const k = sd[i] + t * 0.8; a.setXYZ(i, Math.sin(k * 1.7 + i) * 0.9, ((k * 0.6 + i * 0.07) % 2.8), Math.cos(k * 1.3 + i * 2) * 0.9); }
      a.needsUpdate = true;
    }
  };
  return api;
}
