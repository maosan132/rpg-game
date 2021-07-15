import Phaser from 'phaser';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import MapScene from './Scenes/MapScene';
import UserScene from './Scenes/UserScene';
import FightScene from './Scenes/FightScene';
// import Globals from './Globals';

// const game = new Phaser.Game(config);

// game.scene.add('StartScene', StartScene);
// game.scene.add('MapScene', MapScene);
// game.scene.add('FightScene', FightScene);
// game.scene.add('UserScene', UserScene);

// game.scene.start('Start');

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('StartScene', StartScene);
    this.scene.add('MapScene', MapScene);
    this.scene.add('FightScene', FightScene);
    this.scene.add('UserScene', UserScene);
    this.scene.start('Start');
  }
}

window.game = new Game(); // Entry point