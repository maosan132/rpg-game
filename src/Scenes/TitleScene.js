/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';
import Button from '../UI/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 70, 'title');
    this.title.setScale(1.3);
    const user = this.sys.game.globals.initSettings.userName;
    this.add.text(config.width / 2, 110, `Welcome ${user}:`).setOrigin(0.5).setScale(0.7);

    // Game
    this.gameButton1 = new Button(
      this,
      config.width / 2 - 60,
      config.height / 2 + 20,
      'btn',
      'btn2',
      'Play',
      'Start',
    );
    // Options
    this.gameButton2 = new Button(
      this,
      config.width / 2 + 55,
      config.height / 2 + 20,
      'btn',
      'btn2',
      'Options',
      'Options',
    );
    // Credits
    this.gameButton3 = new Button(
      this,
      config.width / 2 - 60,
      config.height / 2 + 60,
      'btn',
      'btn2',
      'Credits',
      'Credits',
    );

    // LeaderBoard
    this.gameButton4 = new Button(
      this,
      config.width / 2 + 55,
      config.height / 2 + 60,
      'btn',
      'btn2',
      'LeaderBoard',
      'LeaderBoard',
    );

    this.initSettings = this.sys.game.globals.initSettings;
    if (this.initSettings.musicOn && this.initSettings.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.initSettings.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
