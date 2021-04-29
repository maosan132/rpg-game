import 'phaser';
import PlayersMenu from '../UI/PlayersMenu';
import ActionsMenu from '../UI/ActionsMenu';
import EnemiesMenu from '../UI/EnemiesMenu';

export default class UserScene extends Phaser.Scene {
  create() {
    // Add lines and squares to screen
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(4, 0x555555);
    this.graphics.fillStyle(0x531f4d, 1);
    this.graphics.strokeRect(2, 190, 90, 50); // (x, y, w, h)
    this.graphics.fillRect(2, 190, 90, 50);
    this.graphics.strokeRect(95, 190, 90, 50);
    this.graphics.fillRect(95, 190, 90, 50);
    this.graphics.strokeRect(188, 190, 130, 50);
    this.graphics.fillRect(188, 190, 130, 50);

    // basic container to hold all menus
    this.menus = this.add.container();

    this.PlayersMenu = new PlayersMenu(195, 153, this);
    this.actionsMenu = new ActionsMenu(100, 153, this);
    this.enemiesMenu = new EnemiesMenu(8, 153, this);

    // the currently selected menu
    this.currentMenu = this.actionsMenu;

    // add menus to the container
    this.menus.add(this.PlayersMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);

    this.FightScene = this.scene.get('FightScene');
  }

  update() {}
}