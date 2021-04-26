import 'phaser';

export default class StartScene extends Phaser.Scene {

  preload()
  {

  }

  create ()
  {
    let know = this.add.text(400,250, 'Hello World!');
    know.setScale(1.5, 1.5);
  }

  update()
  {
  }

}