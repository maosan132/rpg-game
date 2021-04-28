import 'phaser';

export default class FightScene extends Phaser.Scene {
  preload() {

  }

  create() {
    // Run UserScene parallelly
    this.scene.launch('UserScene');

    // Set background to green color
    this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');
  }

  update() {
  }
}