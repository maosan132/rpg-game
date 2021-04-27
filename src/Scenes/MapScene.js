import 'phaser';

export default class MapScene extends Phaser.Scene {

  preload() {
    
  }

  create() {
    console.log('create mapscene');
    let map = this.make.tilemap({ key: 'map' });
    
    var tiles = map.addTilesetImage('spritesheet', 'tiles');
    var grass = map.createLayer('Grass', tiles, 0, 0);
    var obstacles = map.createLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);









    let know = this.add.text(400,250, 'Hello World!').setOrigin(0.5);
    know.setScale(1.5, 1.5);
    this.add.image(200, 200, 'logo').setScale(0.01, 0.01);
    this.add.sprite(100, 300, 'player');
  }

  update()
  {

  }

}