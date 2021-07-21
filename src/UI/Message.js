import Phaser from 'phaser';

export default class Message extends Phaser.GameObjects.Container {
  constructor(scene, events) {
    super(scene, 160, 30);
    const graphics = this.scene.add.graphics();
    this.add(graphics);
    // graphics.lineStyle(1, 0xffffff, 1);
    graphics.fillStyle(0x000000, 1);
    graphics.strokeRect(-100, -25, 200, 50);
    graphics.fillRect(-100, -25, 200, 50);
    this.text = new Phaser.GameObjects.Text(scene, 0, 0, '', {
      color: '#ffffff',
      align: 'center',
      fontSize: 13,
      wordWrap: { width: 160, useAdvancedWrap: true },
    });
    this.add(this.text);
    this.text.setOrigin(0.5);
    events.on('Message', this.showMessage, this);
    this.visible = false;
  }

  showMessage(text) {
    this.text.setText(text);
    this.visible = true;
    if (this.hideEvent) this.hideEvent.remove(false);
    this.hideEvent = this.scene.time.addEvent({
      delay: 2200,
      callback: this.hideMessage,
      callbackScope: this,
    });
  }

  hideMessage() {
    this.hideEvent = null;
    this.visible = false;
  }
}