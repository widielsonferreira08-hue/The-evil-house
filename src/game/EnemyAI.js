// Shared enemy brain: patrol -> alert -> chase -> attack -> search -> return to patrol.
export class Nav {
  constructor(nodes, collision) {
    this.n = nodes.map(([x, z]) => ({ x, z }));
    this.col = collision;
    this.adj = this.n.map((a, i) => this.n.map((b, j) => j).filter((j) => j !== i && !collision.segmentBlocked(a.x, a.z, this.n[j].x, this.n[j].z, { ignoreDoors: true, forCamera: true })));
  }
  nearestVisible(x, z) {
    let best = -1, bd = 1e9;
    this.n.forEach((p, i) => { const d = Math.hypot(p.x - x, p.z - z); if (d < bd && !this.col.segmentBlocked(x, z, p.x, p.z, { ignoreDoors: true, forCamera: true })) { bd = d; best = i; } });
    return best;
  }
  /** Next point to steer to when going from (x,z) to (tx,tz). */
  next(x, z, tx, tz) {
    if (!this.col.segmentBlocked(x, z, tx, tz, { ignoreDoors: true, forCamera: true })) return { x: tx, z: tz };
    const s = this.nearestVisible(x, z), g = this.nearestVisible(tx, tz);
    if (s < 0 || g < 0) return { x: tx, z: tz };
    if (s === g) return { x: this.n[g].x, z: this.n[g].z };
    const prev = new Array(this.n.length).fill(-2); prev[s] = -1; const q = [s];
    while (q.length) { const c = q.shift(); if (c === g) break; for (const j of this.adj[c]) if (prev[j] === -2) { prev[j] = c; q.push(j); } }
    if (prev[g] === -2) return { x: this.n[g].x, z: this.n[g].z };
    let c = g, step = g; while (prev[c] !== -1) { step = c; c = prev[c]; }
    return { x: this.n[step].x, z: this.n[step].z };
  }
}

export class EnemyAI {
  constructor(o) {
    Object.assign(this, {
      x: 0, z: 0, ry: 0, state: 'patrol', speedPatrol: 1.3, speedChase: 3.4, sight: 11, fov: Math.PI * 0.6, hearWalk: 3.2, hearRun: 8,
      radius: 0.45, attackRange: 1.5, damage: 34, windup: 0.45, patrol: [], wpi: 0, nav: null, timer: 0, wait: 0, lastKnown: null,
      stagger: 0, lostT: 0, cd: 0, moving: false, canHit: true, attackDone: false, ignoreDoors: true, home: null,
    }, o);
    this.home = this.home || { x: this.x, z: this.z };
  }
  reset() { this.x = this.home.x; this.z = this.home.z; this.state = 'patrol'; this.timer = 0; this.stagger = 0; this.lastKnown = null; this.wpi = 0; this.cd = 0; }
  sees(p, col) {
    if (p.hidden || p.dead) return false;
    const dx = p.x - this.x, dz = p.z - this.z, d = Math.hypot(dx, dz);
    const sight = this.sight * (p.light ? 1.15 : 0.85);
    if (d > sight) return false;
    const fx = Math.sin(this.ry), fz = Math.cos(this.ry);
    const ang = Math.acos(Math.max(-1, Math.min(1, (fx * dx + fz * dz) / (d || 1))));
    const heard = d < (p.running ? this.hearRun : p.moving ? this.hearWalk : 1.6);
    if (ang > this.fov / 2 && !heard) return false;
    return !col.segmentBlocked(this.x, this.z, p.x, p.z);
  }
  step(tx, tz, speed, dt, col) {
    const dx = tx - this.x, dz = tz - this.z, d = Math.hypot(dx, dz);
    if (d < 0.05) { this.moving = false; return d; }
    const k = Math.min(d, speed * dt) / d;
    const r = col.resolve(this.x + dx * k, this.z + dz * k, this.radius, { ignoreDoors: this.ignoreDoors });
    this.x = r.x; this.z = r.z; this.moving = true;
    const want = Math.atan2(dx, dz); let da = want - this.ry; da = Math.atan2(Math.sin(da), Math.cos(da));
    this.ry += da * Math.min(1, dt * 8);
    return d;
  }
  face(tx, tz, dt) { const want = Math.atan2(tx - this.x, tz - this.z); let da = want - this.ry; da = Math.atan2(Math.sin(da), Math.cos(da)); this.ry += da * Math.min(1, dt * 8); }
  /** Returns list of events: 'alert' | 'attack'. */
  update(dt, p, col) {
    const ev = []; this.moving = false; this.cd = Math.max(0, this.cd - dt);
    if (this.stagger > 0) { this.stagger -= dt; return ev; }
    const vis = this.sees(p, col), dist = Math.hypot(p.x - this.x, p.z - this.z);
    const goto = (tx, tz, sp) => { const n = this.nav ? this.nav.next(this.x, this.z, tx, tz) : { x: tx, z: tz }; return this.step(n.x, n.z, sp, dt, col); };
    switch (this.state) {
      case 'patrol': {
        if (this.wait > 0) { this.wait -= dt; break; }
        const w = this.patrol[this.wpi % this.patrol.length];
        if (!w) break;
        if (goto(w[0], w[1], this.speedPatrol) < 0.7) { this.wpi++; this.wait = 0.8; }
        if (vis) { this.state = 'alert'; this.timer = 0.7; ev.push('alert'); }
        break;
      }
      case 'alert': this.face(p.x, p.z, dt); this.timer -= dt; if (this.timer <= 0) { this.state = 'chase'; this.lostT = 0; } break;
      case 'chase': {
        if (vis) { this.lastKnown = { x: p.x, z: p.z }; this.lostT = 0; } else this.lostT += dt;
        if (vis && dist < this.attackRange) { this.state = 'attack'; this.timer = this.windup; this.attackDone = false; break; }
        if (this.lostT > 1.6 && !vis) { this.state = 'search'; this.timer = 5; break; }
        const t = vis ? p : this.lastKnown || p; goto(t.x, t.z, this.speedChase);
        break;
      }
      case 'attack': {
        this.face(p.x, p.z, dt); this.timer -= dt;
        if (this.timer <= 0 && !this.attackDone) { this.attackDone = true; if (dist < this.attackRange + 0.35 && !p.hidden) ev.push('attack'); this.cd = 1.0; }
        if (this.attackDone && this.cd <= 0) { this.state = 'chase'; this.lostT = 0; }
        break;
      }
      case 'search': {
        if (vis) { this.state = 'alert'; this.timer = 0.4; ev.push('alert'); break; }
        const lk = this.lastKnown;
        if (lk && goto(lk.x, lk.z, this.speedPatrol * 1.4) > 0.8) break;
        this.timer -= dt; this.ry += dt * 1.6;
        if (this.timer <= 0) { this.state = 'patrol'; let bi = 0, bd = 1e9; this.patrol.forEach((w, i) => { const d = Math.hypot(w[0] - this.x, w[1] - this.z); if (d < bd) { bd = d; bi = i; } }); this.wpi = bi; this.lastKnown = null; }
        break;
      }
      default: break;
    }
    return ev;
  }
}
