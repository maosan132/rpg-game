/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';

export default class WelcomeScene extends Phaser.Scene {
  constructor() {
    super('Welcome');
  }

  init() {
    this.scale.fullscreenTarget = document.getElementById(config.parent);
  }

  create() {
    this.back = this.add.image(400, 300, 'background');
    this.add.image(400, 100, 'title');

    // try to add the story
    const story = ['Your team of warriors just received a communication that the frontier town of Arcadia is about to be attacked by Orcs in 2 days. You have to be there to protect Arcadia.',
      'The safe road will take you there in 7 days.   y then the town will be lost. The only chance to make it on time is to pass through the dangerous Dark Forest.',
      'Passing the forest is difficult and risky. Various monsters and reprobates are larking waiting to attack any trespassers.',
      'Even you and your experienced fighters might not be able to accomplish that. The people of Arcadia are relying on you to save them. Do not fail your mission.'];

    const graphics = this.make.graphics();

    graphics.fillRect(70, 160, 665, 270);
    const mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
    const text = this.add.text(70, 160, story, {
      color: 'white',
      fontSize: '18px ',
      wordWrap: { width: 665 },
      align: 'center',
    });
    text.setMask(mask);

    // end of story


    this.add.text(270, 430, 'Please enter your name', {
      color: 'white',
      fontSize: '18px ',
    });
    this.add.text(700, 560, 'v.1.0.7', {
      color: '#fff',
      fontSize: '12px',
    });

    const input = this.add.dom(400, 478, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
    });

    const style = 'background: url(assets/ui/button_small.png); width: 490px; height: 77px; border: none; font: 32px Georgia; color: #fff;';
    const btn = this.add.dom(390, 550, 'button', style, 'Playx Now');
    btn.addListener('click');

    btn.on('click', () => {
      if (input.node.value) {
        this.model = this.sys.game.globals.model;
        this.model.userName = input.node.value;
        this.scene.start('Title');
      }
    });
  }
}
