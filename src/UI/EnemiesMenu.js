import 'phaser';
import Menu from './Menu';

export default class EnemiesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x;
  }

  confirm() {
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}