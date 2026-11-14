import * as THREE from 'three';
import { buildFox } from '../entities/Willow.js';

export class Player {
  constructor() {
    this.model = buildFox();
    this.group = this.model.group;
    this.x = 0; this.z = 0; this.ry = Math.PI; this.radius = 0.4;
    this.moving = false; this.running = false; this.hidden = false; this.dead = false; this.light = true;
    this.invuln = 0; this.stepT = 0;
    // flashlight (spot light follows the hand)
    this.spot = new THREE.SpotLight(0xfff0c8, 3.2, 26, 0.55, 0.55, 1.1);
    this.spot.position.set(-0.65, 1.55, 0.5);
    this.target = new THREE.Object3D(); this.target.position.set(-0.65, 0.9, 9);
    this.group.add(this.spot, this.target); this.spot.target = this.target;
    this.lens = this.model.parts.lens;
  }
  setPos(x, z, ry) { this.x = x; this.z = z; if (ry !== undefined) this.ry = ry; this.sync(); }
  sync() { this.group.position.set(this.x, 0, this.z); this.group.rotation.y = this.ry; }
  setLight(on) { this.light = on; this.spot.visible = on; this.lens.material.color.setHex(on ? 0xfff2c0 : 0x444444); }
  /** dir: {x,z} unit vector or null. Returns true if a footstep should play. */
  move(dt, dir, run, col) {
    this.moving = !!dir; this.running = !!dir && run;
    let step = false;
    if (dir) {
      const sp = run ? 4.4 : 2.5;
      const r = col.resolve(this.x + dir.x * sp * dt, this.z + dir.z * sp * dt, this.radius);
      this.x = r.x; this.z = r.z;
      const want = Math.atan2(dir.x, dir.z); let da = want - this.ry; da = Math.atan2(Math.sin(da), Math.cos(da));
      this.ry += da * Math.min(1, dt * 14);
      this.stepT -= dt; if (this.stepT <= 0) { this.stepT = run ? 0.27 : 0.46; step = true; }
    }
    this.sync();
    return step;
  }
}
