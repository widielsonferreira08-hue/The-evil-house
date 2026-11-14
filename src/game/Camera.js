import * as THREE from 'three';

/** Hybrid camera: free third-person follow outdoors/corridors, fixed cinematic angles in selected rooms. */
export class CameraRig {
  constructor(camera) {
    this.cam = camera; this.yaw = 0; this.dist = 5.4; this.height = 3.1;
    this.pos = new THREE.Vector3(0, 4, 5); this.look = new THREE.Vector3(); this.fov = 60;
    this.fixed = null; this.sens = 1;
  }
  setRoom(room) { this.fixed = room && room.cam ? room.cam : null; }
  snap(player, col) { this.update(10, player, col, 0, true); }
  update(dt, player, col, yawInput = 0, snap = false) {
    const px = player.x, pz = player.z, k = snap ? 1 : 1 - Math.exp(-dt * 5);
    let targetFov, desired = new THREE.Vector3(), look = new THREE.Vector3();
    if (this.fixed) {
      desired.set(...this.fixed.pos);
      const fl = new THREE.Vector3(...this.fixed.look);
      look.set(px, 1.0, pz).lerp(fl, 0.35);
      targetFov = this.fixed.fov || 62;
    } else {
      this.yaw += yawInput * this.sens;
      const dx = Math.sin(this.yaw), dz = Math.cos(this.yaw);
      let f = 1;
      for (; f > 0.3; f -= 0.1) if (!col.segmentBlocked(px, pz, px + dx * this.dist * f + dx * 0.4, pz + dz * this.dist * f + dz * 0.4, { forCamera: true })) break;
      desired.set(px + dx * this.dist * f, this.height * (0.55 + 0.45 * f), pz + dz * this.dist * f);
      look.set(px, 1.3, pz); targetFov = 62;
    }
    const kp = this.fixed ? 1 - Math.exp(-dt * 3) : k;
    this.pos.lerp(desired, snap ? 1 : kp);
    this.look.lerp(look, snap ? 1 : 1 - Math.exp(-dt * 6));
    this.fov += (targetFov - this.fov) * (snap ? 1 : 1 - Math.exp(-dt * 3));
    this.cam.position.copy(this.pos);
    this.cam.fov = this.fov; this.cam.updateProjectionMatrix();
    this.cam.lookAt(this.look);
  }
  /** Forward vector on the ground plane (what "W" means right now). */
  basis() {
    const f = new THREE.Vector3().subVectors(this.look, this.pos); f.y = 0;
    if (f.lengthSq() < 1e-6) f.set(0, 0, -1);
    f.normalize();
    return { fx: f.x, fz: f.z, rx: -f.z, rz: f.x };
  }
}
