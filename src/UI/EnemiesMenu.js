import 'phaser';
import Menu from './Menu';

export default class EnemiesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x; // Workaround to avoid linter warning
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}