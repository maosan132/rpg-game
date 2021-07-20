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
    this.back = this.add.image(160, 0, 'bg2');
    // bg2.setScale(0.8);
    this.title = this.add.image(155, 70, 'title');
    this.title.setScale(1.3);

    this.add.text(80, 120, 'Please type your name:', {
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
    });

    input.addListener('keypress');
    input.on('keypress', e => {
      if (e.key === 'Enter') {
        if (input.node.value) {
          setUserName(input.node.value);
        }
      }
    });
    const style = `cursor: pointer; width: 100px;
                   height: 30px; font: 12px monospace;`;
    const btn = this.add.dom(155, 180, 'button', style, 'Enter');
    btn.addListener('click');

    btn.on('click', () => {
      if (input.node.value) {
        setUserName(input.node.value);
      }
    });

    const setUserName = (value) => {
      this.initSettings = this.sys.game.globals.initSettings;
      this.initSettings.userName = value;
      this.scene.start('Title');
    };
  }
}
