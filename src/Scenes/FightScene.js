import 'phaser';
import Player from '../Characters/Player';
import Enemy from '../Characters/Enemy';
export default class FightScene extends Phaser.Scene {

  constructor() {
    super({ key: "FightScene" });
  }

  preload() {}

  create() {

    // player character - warrior
    const warrior = new Player(this, 250, 50, 'player', 1, 'Warrior', 100, 20);
    this.add.existing(warrior);

    // player character - mage
    const mage = new Player(this, 250, 100, 'player', 4, 'Mage', 80, 8);
    this.add.existing(mage);

    const enemy1 = new Enemy(this, 50, 50, 'enemy1', null, 'Dragon', 50, 3);
    this.add.existing(enemy1);

    const enemy2 = new Enemy(this, 50, 100, 'enemy2', null, 'Dragon2', 50, 3);
    this.add.existing(enemy2);

    // array with heroes
    this.heroes = [ warrior, mage ];
    // array with enemies
    this.enemies = [ enemy1, enemy2 ];
    // array with both parties, who will attack
    this.units = this.heroes.concat(this.enemies);
    // Run UserScene parallelly
    this.scene.launch('UserScene');

    // Set background to green color
    this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');
  }

  update() {
  }
}