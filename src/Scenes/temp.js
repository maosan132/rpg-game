import 'phaser';
import Player from '../Characters/Player';
import Enemy from '../Characters/Enemy';

export default class FightScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FightScene' });
  }

  preload() {}

  create() {

    const robot = new Player(this, 220, 70, 'player', 1, 'Destroyer', 100, 20);
    this.add.existing(robot);

    const knight = new Player(this, 220, 120, 'player', 4, 'Swordman', 80, 8);
    this.add.existing(knight);

    const monster1 = new Enemy(this, 70, 70, 'enemy1', null, 'Monster1', 50, 3);
    this.add.existing(monster1);

    const monster2 = new Enemy(this, 70, 120, 'enemy2', null, 'Monster2', 50, 3);
    this.add.existing(monster2);

    this.players = [robot, knight];
    this.enemies = [monster1, monster2];
    // array with both parties, who will attack
    this.units = this.players.concat(this.enemies);

    // Run UserScene parallelly
    this.scene.launch('UserScene');

    // Set background to lilly color
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
        const randomHero = Math.floor(Math.random() * this.players.length);
        // call the enemy's attack function
        this.units[this.index].attack(this.players[randomHero]);
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
    this.time.addEvent({
      delay: 3000,
      callback: this.nextTurn,
      callbackScope: this,
    });
  }

  update() {
  }
}