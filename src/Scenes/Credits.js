/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.back = this.add.image(160, 0, 'bg2');
    this.title = this.add.image(155, 40, 'title');
    const style = { fontSize: '10px', fill: '#000' };

    this.created = this.add.text(
      0,
      120,
      'Created By: Mauricio Santos',
      style,
    );
    this.line1 = this.add.text(0, 0, 'Final Capstone Project in JavaScipt Curriculum', style);
    this.credits = this.add.text(0, 0, 'Credits:', style);
    this.phaser = this.add.text(0, 0, 'Phaser 3', style);
    this.open = this.add.text(0, 0, 'OpenGameArt', style);
    this.duke = this.add.text(0, 0, 'Duke Nukem 2 Soundtrack', style);

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 3,
      config.width,
      config.height,
    );

    Phaser.Display.Align.In.Center(this.created, this.zone);
    Phaser.Display.Align.In.Center(this.line1, this.zone);
    Phaser.Display.Align.In.Center(this.credits, this.zone);
    Phaser.Display.Align.In.Center(this.phaser, this.zone);
    Phaser.Display.Align.In.Center(this.open, this.zone);
    Phaser.Display.Align.In.Center(this.duke, this.zone);

    this.line1.displayOriginY = -25;
    this.credits.displayOriginY = -50;
    this.phaser.displayOriginY = -70;
    this.open.displayOriginY = -85;
    this.duke.displayOriginY = -100;


    const Cstyle = `cursor: pointer; width: 100px;
                   height: 30px; font: 12px monospace; color: white`;
    const btn = this.add.dom(155, 210, 'button', Cstyle, 'Menu');

    btn.addListener('click');

    btn.on('click', () => {
      this.initSettings = this.sys.game.globals.initSettings;
      this.initSettings.score = 0;
      this.scene.start('Title');
    });
  }
}