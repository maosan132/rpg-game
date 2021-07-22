/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';
import { getScores } from '../Config/LeaderboardApi';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  init() {
    this.scale.fullscreenTarget = document.getElementById(config.parent);
  }

  create() {
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 40, 'title');

    this.add.text(155, 80, 'Hall of Fame', {
      color: 'black',
      fontSize: '12px ',
      fontFamily: 'monospace',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const scoreStyle = {
        color: 'white',
        fontSize: '12px ',
      };
      scores.sort((a, b) => b.score - a.score);
      const margin = 30;
      for (let i = 0; i < 6; i += 1) {
        if (scores[i] !== undefined) {
          this.add.text(
            155,
            100 + margin * i,
            `${i + 1}. ${scores[i].user} ${scores[i].score}`,
            scoreStyle,
          ).setOrigin(0.5, 0.5);
        }
      }
    });
    const Hstyle = `cursor: pointer; width: 100px;
    height: 30px; font: 12px monospace; color: white`;
    const btn = this.add.dom(155, 200, 'button', Hstyle, 'Menu');

    btn.addListener('click');

    btn.on('click', () => {
      this.initSettings = this.sys.game.globals.initSettings;
      this.initSettings.score = 0;
      this.scene.start('Title');
    });
  }
}
