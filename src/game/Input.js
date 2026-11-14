// Keyboard + mouse state with per-frame "pressed" events.
const GAME_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight', 'KeyE', 'KeyF', 'KeyI', 'Tab']);

export class Input {
  constructor(target = window) {
    this.down = new Set();
    this.pressed = new Set();
    this.mouseDX = 0;
    this.mouseDown = false;
    this.mousePressed = false;
    this.enabled = true;
    this._kd = (e) => {
      if (GAME_KEYS.has(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
    };
    this._ku = (e) => this.down.delete(e.code);
    this._md = (e) => { if (e.button === 0) { this.mouseDown = true; this.mousePressed = true; } };
    this._mu = (e) => { if (e.button === 0) this.mouseDown = false; };
    this._mm = (e) => { if (e.buttons & 2 || e.buttons & 1) this.mouseDX += e.movementX || 0; };
    this._blur = () => { this.down.clear(); this.mouseDown = false; };
    this._ctx = (e) => e.preventDefault();
    target.addEventListener('keydown', this._kd);
    target.addEventListener('keyup', this._ku);
    target.addEventListener('mousedown', this._md);
    target.addEventListener('mouseup', this._mu);
    target.addEventListener('mousemove', this._mm);
    target.addEventListener('blur', this._blur);
    target.addEventListener('contextmenu', this._ctx);
    this.target = target;
  }
  isDown(c) { return this.enabled && this.down.has(c); }
  wasPressed(c) { return this.enabled && this.pressed.has(c); }
  endFrame() { this.pressed.clear(); this.mouseDX = 0; this.mousePressed = false; }
  clear() { this.down.clear(); this.pressed.clear(); this.mouseDX = 0; this.mouseDown = false; this.mousePressed = false; }
  dispose() {
    const t = this.target;
    t.removeEventListener('keydown', this._kd); t.removeEventListener('keyup', this._ku);
    t.removeEventListener('mousedown', this._md); t.removeEventListener('mouseup', this._mu);
    t.removeEventListener('mousemove', this._mm); t.removeEventListener('blur', this._blur);
    t.removeEventListener('contextmenu', this._ctx);
  }
}
