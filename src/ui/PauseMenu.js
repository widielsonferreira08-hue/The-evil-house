import { h, root, MenuList, slotPicker, confirmDialog } from './ui.js';
import { openSettings } from './Settings.js';

export class PauseMenu {
  constructor(app, scene) { this.app = app; this.scene = scene; this.open = false; }
  show() {
    if (this.open) return; this.open = true;
    const app = this.app;
    this.ov = h('div', 'overlay'); const panel = h('div', 'panel'); panel.appendChild(h('h3', '', 'PAUSED'));
    this.ov.appendChild(panel); root().appendChild(this.ov);
    const sub = (fn) => { this.menu.detach(); this.ov.style.display = 'none'; fn(() => { this.ov.style.display = ''; this.menu.attach(); }); };
    this.menu = new MenuList(app, [
      { label: 'RESUME', action: () => this.hide() },
      { label: 'INVENTORY', action: () => sub((back) => this.scene.openInventory(back)) },
      { label: 'SETTINGS', action: () => sub((back) => openSettings(app, back)) },
      { label: 'SAVE GAME', action: () => sub((back) => slotPicker(app, 'save', (id) => { this.scene.saveTo(id); back(); }, back)) },
      { label: 'LOAD GAME', action: () => sub((back) => slotPicker(app, 'load', (id) => { this.hide(true); this.scene.loadFrom(id); }, back)) },
      { label: 'RETURN TO MAIN MENU', action: () => sub((back) => confirmDialog(app, 'Return to the main menu? Unsaved progress will be lost.', () => { this.hide(true); app.goto('menu'); }, back)) },
    ], { onEsc: () => this.hide() });
    panel.appendChild(this.menu.el); this.menu.attach();
  }
  hide(silent) {
    if (!this.open) return; this.open = false;
    this.menu.detach(); this.ov.remove();
    if (!silent) this.scene.resume();
  }
}
