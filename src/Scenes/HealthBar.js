/* eslint-disable no-undef */
/* eslint-disable no-bitwise */
import 'phaser';

export default class HealthBar {
  constructor(scene, x, y) {
    this.bar = new Phaser.GameObjects.Graphics(scene);
    this.x = x;
    this.y = y;
    this.value = 100;
    this.p = 0.75;
    scene.add.existing(this.bar);
  }

  decrease(val) {
    this.value = val | 0;
    if (this.value < 0) {
      this.value = 0;
    }
    this.draw();
    return (this.value === 0);
  }

  draw() {
    this.bar.clear();
    //  BG
    this.bar.fillStyle(0x000000);
    this.bar.fillRect(this.x, this.y, 41, 8);
    this.bar.fillStyle(0xffffff);
    this.bar.fillRect(this.x + 2, this.y + 2, 36, 4);

    if (this.value < 40) {
      this.bar.fillStyle(0xff0000);
    } else if (this.value < 85) {
      this.bar.fillStyle(0xead91c);
    } else {
      this.bar.fillStyle(0x0c00ff);
    }
    const d = Math.floor(this.p * this.value / 2);
    this.bar.fillRect(this.x + 2, this.y + 2, d, 4);
  }

  remove() {
    this.bar.destroy();
  }
}