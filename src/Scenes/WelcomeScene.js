/* eslint-disable no-undef */
import 'phaser';
import config from '../Config/config';
import button1 from '../assets/button.png';

export default class WelcomeScene extends Phaser.Scene {
  constructor() {
    super('Welcome');
  }

  init() {
    this.scale.fullscreenTarget = document.getElementById(config.parent);
  }

  create() {

    //this.scale.displaySize.setAspectRatio( game.width/game.height );
    // this.scale.refresh();

    this.back = this.add.image(160, 0, 'bg2');
    // bg2.setScale(0.8);
    this.title = this.add.image(155, 70, 'title');
    this.title.setScale(1.3);

    // try to add the story
    // const story = ['You have to be there to protect Arcadia.'];
    //   'The safe road will take you there in 7 days.   y then the town will be lost. .',
    //   'Passing the forest is difficult and risky. Various monsters and reprobates are larking waiting to attack any trespassers.',
    //   'Even you and your experienced fighters might not be able to accomplish that. The people of Arcadia are relying on you to save them. Do not fail your mission.'];

    // const graphics = this.make.graphics();

    // graphics.fillRect(70, 100, 665, 270);
    // const mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
    // const text = this.add.text(70, 160, story, {
    //   color: 'white',
    //   fontSize: '11px ',
    //   wordWrap: { width: 665 },
    //   align: 'center',
    // });
    // text.setMask(mask);

    // end of story


    this.add.text(80, 120, 'Please enter your name', {
      color: 'black',
      fontSize: '12px ',
    });
    this.add.text(10, 220, 'v.0.0.1', {
      color: '#fff',
      fontSize: '10px',
    });

    const input = this.add.dom(155, 145, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '10px',
      autofocus: true,
      defaultValue: 'your name',
      color: 'red',
      font: 'Monospace 1px',
    });

    const button = this.add.dom(155, 175, 'button', {
      width: '100px',
      height: '25px',
      name: 'submit',
      type: 'submit',
      value: 'Play',
      background: 'red',
      cursor: 'pointer',
      innerText: 'dfasdfasdf',
    });

    // const style = 'background: url("./assets/button2.png"); cursor: pointer; width: 100px; height: 30px; border: 1px solid red; font: 12px Georgia; color: #000;';
    // const btn = this.add.dom(155, 180, 'button', style, 'Play Now');
    button.addListener('click');

    button.on('click', () => {
      if (input.node.value) {
        console.log(this);
        this.initSettings = this.sys.game.globals.initSettings;
        this.initSettings.userName = input.node.value;
        this.scene.start('Start');
      }
    });
  }
}
