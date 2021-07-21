import 'phaser';
import Menu from './Menu';

export default class EnemiesMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x; // Workaround to avoid linter warning
  }

  confirm() { // Player selected enemy and we send its id with the event
    this.scene.events.emit('Enemy', this.menuItemIndex);
  }
}