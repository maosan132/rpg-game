import 'phaser';
import bg2 from '../assets/bg2.jpg';
import title from '../assets/title.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('title', title);
    this.load.image('bg2', bg2);
  }

  create() {
    this.scene.start('Preloader');
  }
}
