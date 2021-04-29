import 'phaser';
import PlayersMenu from '../UI/PlayersMenu';
import ActionsMenu from '../UI/ActionsMenu';
import EnemiesMenu from '../UI/EnemiesMenu';
// import FightScene from '../Scenes/FightScene'

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

    this.playersMenu = new PlayersMenu(195, 153, this);
    this.actionsMenu = new ActionsMenu(100, 153, this);
    this.enemiesMenu = new EnemiesMenu(8, 153, this);

    // the currently selected menu
    this.currentMenu = this.actionsMenu;

    // add menus to the container
    this.menus.add(this.playersMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);

    this.FightScene = this.scene.get('FightScene');

    this.remapPlayers();
    this.remapEnemies();
  }

  remapPlayers() {
    const players = this.FightScene.players; // use object destructuring
    console.log(players);
    console.log(this.playersMenu);
    this.playersMenu.remap(players);
  }

  remapEnemies() {
    const enemies = this.FightScene.enemies; // use object destructuring
    console.log(enemies);
    console.log(this.enemiesMenu);
    this.enemiesMenu.remap(enemies);
  }

  update() {}
}