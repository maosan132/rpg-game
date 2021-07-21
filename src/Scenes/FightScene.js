import Phaser from 'phaser';
import Player from '../Characters/Player';
import Enemy from '../Characters/Enemy';
import HealthBar from '../Scenes/HealthBar';

export default class FightScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FightScene' });
  }

  create() {
    // Set background to lilly color
    // this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');

    this.back = this.add.image(160, 0, 'bg2');
    // next two lines deals with startin' the fight
    this.startFight();
    this.sys.events.on('wake', this.startFight, this);
  }

  startFight() {
    const robot = new Player(this, 220, 90, 'player', 1, 'Destroyer', 100, 20); // Creates character and skills
    this.add.existing(robot);
    const knight = new Player(this, 220, 140, 'player', 4, 'Swordman', 80, 8);
    this.add.existing(knight);
    const monster1 = new Enemy(this, 70, 90, 'enemy1', null, 'Monster1', 50, 15);
    this.add.existing(monster1);
    const monster2 = new Enemy(this, 70, 140, 'enemy2', null, 'Monster2', 50, 8);
    this.add.existing(monster2);

    this.players = [robot, knight];
    this.enemies = [monster1, monster2];
    // array with both parties, who will attack
    this.units = this.players.concat(this.enemies);
    this.units.forEach(unit => unit.healthBar.draw()); // add healthbars
    this.index = -1;// currently active unit -> it starts -1 and at each turn it grows to 0 then 1

    // Run UserScene parallelly
    this.scene.run('UserScene'); // in first part I used 'scene.launch'
  }

  nextTurn() {
    if (this.checkEndBattle()) {
      this.endBattle(this.checkEndBattle());
      return;
    }
    do {
      this.index += 1;
      // When we run out of units, we start again from the first one
      if (this.index >= this.units.length) {
        this.index = 0;
      }
    } while (!this.units[this.index].living);

    if (this.units[this.index] instanceof Player) { // If human player
      // select action and then enemy
      this.events.emit('PlayerSelect', this.index);
    } else { // else if its enemy unit pick random alive hero to attack
      let randomHero = 0;
      do {
        randomHero = Math.floor(Math.random() * this.players.length);
      } while (!this.players[randomHero].living);
      // call the enemy's attack function
      this.units[this.index].attack(this.players[randomHero]);
      const hero = this.players[randomHero];
      hero.healthBar.decrease(100 * (hero.hp / hero.maxHp));

      // add timer for the next turn, so will have smooth gameplay
      this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
    }
  }

  checkEndBattle() {
    let victory = true;
    // if all enemies are dead we have victory
    this.enemies.forEach(i => {
      if (i.living) victory = false;
    });
    let gameOver = true;
    // if all heroes are dead we have game over
    this.enemies.forEach(i => {
      if (i.living) gameOver = false;
    });
    if (victory) {
      return 'victory';
    }
    if (gameOver) {
      return 'gameOver';
    }
    return victory || gameOver;
  }

  // attack the target then a timer event to call the next turn
  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
      const enemy = this.enemies[target];
      enemy.healthBar.decrease(100 * (enemy.hp / enemy.maxHp));
    }
    this.time.addEvent({
      delay: 3000,
      callback: this.nextTurn,
      callbackScope: this,
    });
  }

  endBattle(result) {
    this.updateScore(this.enemies.length, this.players.length);
    // clear state, remove sprites
    this.players.length = 0;
    this.enemies.length = 0;
    this.units.forEach(i => i.destroy());
    this.units.length = 0;
    this.index = -1;

    if (result === 'gameOver') {
      this.scene.stop('Game');
      this.scene.sleep('UIScene');
      this.scene.switch('GameOver');
    } else if (result === 'victory') {
      // sleep the menu
      this.scene.sleep('UserScene');
      // return to WorldScene and sleep current BattleScene
      this.scene.switch('MapScene');
    }
  }

  updateScore(e, h) {
    let { score } = this.sys.game.globals.initSettings;
    score += (e + h) * 10;
    this.sys.game.globals.initSettings.score = score;
  }
}