import 'phaser';

export default class UserScene extends Phaser.Scene {
  preload() {}

  create() {
    // Add lines and squares to screen
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(4, 0x555555);
    this.graphics.fillStyle(0x531f4d, 1);
    this.graphics.strokeRect(2, 190, 90, 50); // (x, y, w, h)
    this.graphics.fillRect(2, 190, 90, 50);
    this.graphics.strokeRect(95, 190, 90, 50);
    this.graphics.fillRect(95, 190, 90, 50);
    this.graphics.strokeRect(188, 190, 130, 50);
    this.graphics.fillRect(188, 190, 130, 50);
  }

  update() {}
}