import 'phaser';
import Menu from './Menu';
// import Unit from './Unit';

export default class ActionsMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.addMenuItem('Attack');
  }

  confirm() { // Select an action and next menu and choose enemies to apply action
    this.scene.events.emit('SelectedAction');
  }
}