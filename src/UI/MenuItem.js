import Phaser from 'phaser';

export default class MenuItem extends Phaser.GameObjects.Text {
  constructor(x, y, text, scene) {
    super(scene, x, y, text, {
      color: '#ffffff',
      align: 'left',
      fontSize: 15,
      weight: 'bold',
    });
  }

  select() {
    this.setColor('#f8ff38');
  }

  deselect() {
    this.setColor('#ffffff');
  }

  // when the associated unit gets killed
  unitKilled() {
    this.active = false;
    this.visible = false;
  }
}