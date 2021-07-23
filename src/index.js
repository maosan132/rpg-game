import Phaser from 'phaser';
import './style.css';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import MapScene from './Scenes/MapScene';
import UserScene from './Scenes/UserScene';
import FightScene from './Scenes/FightScene';
import BootScene from './Scenes/BootScene';
import Preloader from './Scenes/PreloaderScene';
import Welcome from './Scenes/WelcomeScene';
import Title from './Scenes/TitleScene';
import LeaderBoard from './Scenes/LeaderBoard';
import Credits from './Scenes/Credits';
import Options from './Scenes/OptionsScene';
import InitSettings from './Config/InitSettings';
import GameOverScene from './Scenes/GameOverScene';
import VictoryScene from './Scenes/VictoryScene';

// const game = new Phaser.Game(config);

// game.scene.add('StartScene', StartScene);
// game.scene.add('MapScene', MapScene);
// game.scene.add('FightScene', FightScene);
// game.scene.add('UserScene', UserScene);

// game.scene.start('Start');

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const initSettings = new InitSettings();
    this.globals = { initSettings, bgMusic: null };
    this.scene.add('StartScene', StartScene);
    this.scene.add('MapScene', MapScene);
    this.scene.add('FightScene', FightScene);
    this.scene.add('UserScene', UserScene);
    this.scene.add('Bootscene', BootScene);
    this.scene.add('PreloaderScene', Preloader);
    this.scene.add('WelcomeScene', Welcome);
    this.scene.add('TitleScene', Title);
    this.scene.add('CreditsScene', Credits);
    this.scene.add('OptionsScene', Options);
    this.scene.add('LeaderBoardScene', LeaderBoard);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Victory', VictoryScene);
    this.scene.start('BootScene');
  }
}

window.game = new Game(); // Entry point