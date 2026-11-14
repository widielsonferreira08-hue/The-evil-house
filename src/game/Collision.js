// 2D (XZ plane) AABB collision world: circle-vs-box resolution and segment tests for line of sight.
export class Collision {
  constructor() { this.boxes = []; }
  add(minx, maxx, minz, maxz, opts = {}) {
    const b = { minx, maxx, minz, maxz, enabled: true, door: false, sight: true, ...opts };
    this.boxes.push(b);
    return b;
  }
  /** Push a circle (x,z,r) out of every enabled box. Returns the corrected position. */
  resolve(x, z, r, { ignoreDoors = false } = {}) {
    for (let pass = 0; pass < 2; pass++) {
      for (const b of this.boxes) {
        if (!b.enabled || (ignoreDoors && b.door)) continue;
        const cx = Math.max(b.minx, Math.min(x, b.maxx));
        const cz = Math.max(b.minz, Math.min(z, b.maxz));
        let dx = x - cx, dz = z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2), push = r - d;
          x += (dx / d) * push; z += (dz / d) * push;
        } else {
          // centre is inside the box: push out along the shortest axis
          const l = x - b.minx, rr = b.maxx - x, t = z - b.minz, bt = b.maxz - z;
          const m = Math.min(l, rr, t, bt);
          if (m === l) x = b.minx - r; else if (m === rr) x = b.maxx + r; else if (m === t) z = b.minz - r; else z = b.maxz + r;
        }
      }
    }
    return { x, z };
  }
  /** Does the segment hit any blocking box? Used for sight and camera. */
  segmentBlocked(x0, z0, x1, z1, { ignoreDoors = false, forCamera = false } = {}) {
    const dx = x1 - x0, dz = z1 - z0;
    for (const b of this.boxes) {
      if (!b.enabled || (ignoreDoors && b.door)) continue;
      if (!forCamera && !b.sight) continue;
      let t0 = 0, t1 = 1;
      const slab = (p, d, mn, mx) => {
        if (Math.abs(d) < 1e-9) return p >= mn && p <= mx;
        let a = (mn - p) / d, c = (mx - p) / d;
        if (a > c) { const t = a; a = c; c = t; }
        t0 = Math.max(t0, a); t1 = Math.min(t1, c);
        return t0 <= t1;
      };
      if (slab(x0, dx, b.minx, b.maxx) && slab(z0, dz, b.minz, b.maxz)) return true;
    }
    return false;
  }
}
