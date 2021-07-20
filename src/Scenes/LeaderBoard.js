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

    this.add.text(400, 200, 'Top Warriors', {
      color: 'black',
      fontSize: '12px ',
      fontFamily: 'monospace',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const scoreStyle = {
        color: 'white',
        fontSize: '16px ',
      };
      scores.sort((a, b) => b.score - a.score);
      const margin = 30;
      for (let i = 0; i < 6; i += 1) {
        if (scores[i] !== undefined) {
          this.add
            .text(
              400,
              240 + margin * i,
              `${i + 1}. ${scores[i].user} ${scores[i].score}`,
              scoreStyle,
            )
            .setOrigin(0.5, 0.5);
        }
      }
    });

    const style = 'background: url(assets/ui/button_small.png); width: 490px; height: 77px; border: none; font: 32px Georgia; color: #fff;';
    const btn = this.add.dom(390, 490, 'button', style, 'Menu');
    btn.addListener('click');

    btn.on('click', () => {
      this.initSettings = this.sys.game.globals.initSettings;
      this.initSettings.score = 0;
      this.scene.start('Title');
    });
  }
}
