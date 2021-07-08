import Phaser from 'phaser';
import PlayersMenu from '../UI/PlayersMenu';
import ActionsMenu from '../UI/ActionsMenu';
import EnemiesMenu from '../UI/EnemiesMenu';
import Message from '../UI/Message';

export default class UserScene extends Phaser.Scene {
  constructor() {
    super({ key: 'UserScene' });
  }

  create() {
    // Add lines and squares to screen
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(4, 0xffff00);
    this.graphics.fillStyle(0x531f4d, 1);
    this.graphics.strokeRect(2, 190, 90, 50); // (x, y, w, h)
    this.graphics.fillRect(2, 190, 90, 50);
    this.graphics.strokeRect(95, 190, 90, 50);
    this.graphics.fillRect(95, 190, 90, 50);
    this.graphics.strokeRect(188, 190, 130, 50);
    this.graphics.fillRect(188, 190, 130, 50);

    // Container to hold all menus
    this.menus = this.add.container();

    this.playersMenu = new PlayersMenu(195, 195, this);
    this.actionsMenu = new ActionsMenu(113, 205, this);
    this.enemiesMenu = new EnemiesMenu(8, 195, this);

    // Current menu
    this.currentMenu = this.actionsMenu;

    // Add menus
    this.menus.add(this.playersMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);

    this.fightScene = this.scene.get('FightScene'); // To access the FightScene from the UserScene

    this.input.keyboard.on('keydown', this.onKeyInput, this);

    // when it's player unit turn to move
    this.fightScene.events.on('PlayerSelect', this.onPlayerSelect, this); // Listen for ‘PlayerSelect’

    // when the action on the menu is selected *
    this.events.on('SelectedAction', this.onSelectedAction, this);

    // an enemy is selected
    this.events.on('Enemy', this.onEnemy, this);

    // when the scene receives wake event
    this.sys.events.on('wake', this.createMenu, this);

    // add message object to UserScene
    this.message = new Message(this, this.fightScene.events);
    this.add.existing(this.message);

    // start the first turn from the UserScene
    // this.fightScene.nextTurn();

    this.createMenu();
  }

  remapPlayers() {
    const { players } = this.fightScene; // use object destructuring
    this.playersMenu.remap(players);
  }

  remapEnemies() {
    const { enemies } = this.fightScene; // use object destructuring
    this.enemiesMenu.remap(enemies);
  }

  onKeyInput(e) {
    if (this.currentMenu && this.currentMenu.selected) {
      if (e.code === 'ArrowUp') {
        this.currentMenu.moveSelectionUp();
      } else if (e.code === 'ArrowDown') {
        this.currentMenu.moveSelectionDown();
      } else if (e.code === 'ArrowRight' || e.code === 'Shift') {
        this.currentMenu.confirm(); // will be changed, probably to trigger a tone
      } else if (e.code === 'Space' || e.code === 'ArrowLeft') {
        this.currentMenu.confirm();
      }
    }

    this.message = new Message(this, this.fightScene.events);
    this.add.existing(this.message);
  }


  // select the id-th element from the playersMenu
  onPlayerSelect(id) {
    this.playersMenu.select(id);
    this.actionsMenu.select(0);
    this.currentMenu = this.actionsMenu;
  }

  // make the enemiesMenu active and we select the first enemy
  onSelectedAction() {
    this.currentMenu = this.enemiesMenu;
    this.enemiesMenu.select(0);
  }

  // will deselect all menus and then will send data to the FightScene
  onEnemy(index) {
    this.playersMenu.deselect();
    this.actionsMenu.deselect();
    this.enemiesMenu.deselect();
    this.currentMenu = null;
    this.fightScene.receivePlayerSelection('attack', index);
  }

  // Manages menu instances
  createMenu() {
    // map player menu items to players
    this.remapPlayers();
    // map enemies menu items to enemies
    this.remapEnemies();
    // first move
    this.fightScene.nextTurn();
  }
}