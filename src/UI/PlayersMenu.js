import 'phaser';
import Menu from './Menu';
// import Unit from './Unit';

export default class PlayersMenu extends Menu {
  constructor(x, y, scene) {
    super(x, y, scene);
    this.x = x; // Workaround to avoid linter warning
  }
}