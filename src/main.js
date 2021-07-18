import Phaser from 'phaser';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import MapScene from './Scenes/MapScene';
import UserScene from './Scenes/UserScene';
import FightScene from './Scenes/FightScene';
import BootScene from './Scenes/BootScene';
import Preloader from './Scenes/PreloaderScene';
import Welcome from './Scenes/WelcomeScene';
// import InitSettings from './InitSettings';

// const game = new Phaser.Game(config);

// game.scene.add('StartScene', StartScene);
// game.scene.add('MapScene', MapScene);
// game.scene.add('FightScene', FightScene);
// game.scene.add('UserScene', UserScene);

// game.scene.start('Start');

class Game extends Phaser.Game {
  constructor() {
    super(config);
    // const initSettings = new InitSettings();
    // this.globals = { initSettings, bgMusic: null };
    this.scene.add('StartScene', StartScene);
    this.scene.add('MapScene', MapScene);
    this.scene.add('FightScene', FightScene);
    this.scene.add('UserScene', UserScene);
    this.scene.add('Bootscene', BootScene);
    this.scene.add('PreloaderScene', Preloader);
    this.scene.add('UserScene', Welcome);
    this.scene.start('BootScene');
  }
}

window.game = new Game(); // Entry point