/* eslint-disable no-undef */
import 'phaser';
import Button from '../UI/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    const titleFont = { fontFamily: 'monospace', fontSize: 12, color: 'black' };
    const selectionFont = { fontFamily: 'monospace', fontSize: 10 };
    this.initSettings = this.sys.game.globals.initSettings;
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 40, 'title');

    this.text = this.add.text(135, 60, 'Options', titleFont);
    this.musicButton = this.add.image(115, 100, 'checkedBox').setScale(0.5);
    this.musicText = this.add.text(135, 95, 'Music Enabled', selectionFont);

    this.soundButton = this.add.image(115, 130, 'checkedBox').setScale(0.5);
    this.soundText = this.add.text(135, 125, 'Sound Enabled', selectionFont);

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on(
      'pointerdown',
      () => {
        this.initSettings.musicOn = !this.initSettings.musicOn;
        this.updateAudio();
      },
    );

    this.soundButton.on(
      'pointerdown',
      () => {
        this.initSettings.soundOn = !this.initSettings.soundOn;
        this.updateAudio();
      },
    );

    this.menuButton = new Button(this, 155, 175, 'btn', 'btn2', 'Menu', 'Title');

    this.updateAudio();
  }

  updateAudio() {
    if (this.initSettings.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.initSettings.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.initSettings.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.initSettings.bgMusicPlaying = true;
      }
    }

    if (this.initSettings.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}
