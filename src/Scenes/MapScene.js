import 'phaser';

export default class MapScene extends Phaser.Scene {

  preload() {
    
  }

  create() {
    console.log('create mapscene');
    const map = this.make.tilemap({ key: 'map' });
    
    const tiles = map.addTilesetImage('spritesheet', 'tiles');
    const grass = map.createLayer('Grass', tiles, 0, 0);
    const obstacles = map.createLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    // Adding the player

    this.player = this.physics.add.sprite(50, 100, 'player', 6);








    let know = this.add.text(400,250, 'Hello World!').setOrigin(0.5);
    know.setScale(1.5, 1.5);
    this.add.image(200, 200, 'logo').setScale(0.01, 0.01);
    this.add.sprite(100, 300, 'player');
  }

  update()
  {

  }

}