/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';
import { putScore } from '../Config/LeaderboardApi';

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init() {
    this.scale.fullscreenTarget = document.getElementById(config.parent);
    this.initSettings = this.sys.game.globals.initSettings;
  }

  create() {
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 40, 'title');

    this.add.text(155, 80, 'Try again!', {
      color: 'black',
      fontSize: '18px ',
      fontFamily: 'monospace',
      fontWeight: 'bold',
    }).setOrigin(0.5, 0.5);

    const loser = 'Better luck next time!';
    this.add.text(155, 110, loser, {
      color: 'black',
      fontSize: '14px ',
    }).setOrigin(0.5, 0.5);

    this.add.text(155, 140, `Score: ${this.initSettings.score}`, {
      color: 'white',
      fontSize: '14px ',
    }).setOrigin(0.5, 0.5);

    putScore(this.initSettings.userName, this.initSettings.score);

    const Lstyle = `cursor: pointer; width: 100px;
    height: 30px; font: 12px monospace; color: white`;
    const btn = this.add.dom(155, 180, 'button', Lstyle, 'Menu');

    btn.addListener('click');

    btn.on('click', () => {
      this.initSettings.resetScore();
      this.scene.start('Title');
    });
  }
}