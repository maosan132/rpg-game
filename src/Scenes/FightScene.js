import 'phaser';
import Player from '../Characters/Player';
import Enemy from '../Characters/Enemy';

export default class FightScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FightScene' });
  }

  exitFight() {
    this.scene.sleep('UserScene');
    this.scene.switch('MapScene');
  }

  wake() {
    this.scene.run('UIScene');
    this.time.addEvent({
      delay: 2000,
      callback: this.exitFight,
      callbackScope: this,
    });
  }

  preload() {}

  create() {
    // Set background to lilly color
    this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');

    this.startFight();

    // const timeEvent = this.time.addEvent({ // Where does this prop get called? by itself?
    //   delay: 2000,
    //   callback: this.exitFight,
    //   callbackScope: this,
    // });

    this.sys.events.on('wake', this.wake, this);

    const timeEvent = this.time.addEvent({
      delay: 92000,
      callback: this.exitFight,
      callbackScope: this,
    });
  }

  nextTurn() {
    if (this.checkEndBattle()) {
      this.endBattle();
      return;
    }
    do {
      this.index++;
      // When we run out of units, we start again from the first one
      if (this.index >= this.units.length) {
        this.index = 0;
      }
    } while (!this.units[this.index].living);

    if (this.units[this.index] instanceof Player) {
      this.events.emit('PlayerSelect', this.index);
    } else { // else if its enemy unit
      let randomPlayer;
      do {
        randomPlayer = Math.floor(Math.random() * this.players.length);
      } while (!this.players[randomPlayer].living);
      // call the enemy's attack function
      this.units[this.index].attack(this.players[randomPlayer]);
      // add timer for the next turn, so will have smooth gameplay
      this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
    }
  }

  startFight() {
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

    this.index = -1;// currently active unit

    // Run UserScene parallelly
    this.scene.run('UserScene'); // in first part I used '.launch'
}

  checkEndBattle() {
    let victory = true;
    // if all enemies are dead we have victory
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].living) victory = false;
    }
    let gameOver = true;
    // if all heroes are dead we have game over
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].living) gameOver = false;
    }
    return victory || gameOver;
}

  endBattle() {
    // clear state, remove sprites
    this.players.length = 0;
    this.enemies.length = 0;
    for (let i = 0; i < this.units.length; i++) {
      // link item
      this.units[i].destroy();
    }
    this.units.length = 0;
    // sleep the UI
    this.scene.sleep('UserScene');
    // return to WorldScene and sleep current BattleScene
    this.scene.switch('MapScene');
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