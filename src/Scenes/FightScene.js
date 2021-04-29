import 'phaser';
import Player from '../Characters/Player';
import Enemy from '../Characters/Enemy';

export default class FightScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FightScene' });
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

    // array with players
    this.players = [warrior, mage];
    // array with enemies
    this.enemies = [enemy1, enemy2];
    // array with both parties, who will attack
    this.units = this.players.concat(this.enemies);

    // Run UserScene parallelly
    this.scene.launch('UserScene');

    // Set background to green color
    this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');

    // This index will show us the currently active unit in the units array
    this.index = -1;
  }

  nextTurn() {
    this.index++;
    // if there are no more units, we start again from the first one
    if (this.index >= this.units.length) {
      this.index = 0;
    }
    if (this.units[this.index]) {
      // if its player hero
      if (this.units[this.index] instanceof Player) {
        this.events.emit('PlayerSelect', this.index);
      } else { // else if its enemy unit
        // pick random hero
        const randomHero = Math.floor(Math.random() * this.heroes.length);
        // call the enemy's attack function
        this.units[this.index].attack(this.heroes[randomHero]);
        // add timer for the next turn, so will have smooth gameplay
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
      }
    }
  }

  // attack the target then a timer event to call the next turn
  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
  }

  update() {
  }
}