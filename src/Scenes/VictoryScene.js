/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';
import { putScore } from '../Config/LeaderboardApi';

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super('Victory');
  }

  init() {
    this.scale.fullscreenTarget = document.getElementById(config.parent);
    this.initSettings = this.sys.game.globals.initSettings;
  }

  create() {
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 40, 'title');

    this.add.text(70, 1000, 'Victory!', {
      color: 'white',
      fontSize: '14px ',
      fontFamily: 'monospace',
    }).setOrigin(0.5, 0.5);

    const victory = 'Congratulations brave warrior. You have made it!.';
    this.add.text(90, 150, victory, {
      color: 'white',
      fontSize: '12px ',
    }).setOrigin(0.5, 0.5);

    this.add.text(110, 150, `Score: ${this.initSettings.score}`, {
      color: 'white',
      fontSize: '14px ',
    }).setOrigin(0.5, 0.5);

    putScore(this.initSettings.userName, this.initSettings.score);

    const style = `background: url(assets/ui/button_small.png);
                  width: 490px; height: 77px; border: none; font: 12px monospace; color: #fff;`;
    const btn = this.add.dom(130, 150, 'button', style, 'Menu');
    btn.addListener('click');

    btn.on('click', () => {
      this.initSettings.resetScore();
      this.scene.start('Title');
    });
  }
}