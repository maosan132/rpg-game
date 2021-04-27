import 'phaser';

export default class MapScene extends Phaser.Scene {
  create() {
    console.log('create mapscene');
    const map = this.make.tilemap({ key: 'map' });

    const tiles = map.addTilesetImage('spritesheet', 'tiles');
    const grass = map.createLayer('Grass', tiles, 0, 0);
    const obstacles = map.createLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    // Creating the player with physics

    this.player = this.physics.add.sprite(50, 100, 'player', 6);

    // Adding some moere physics
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);

    // Erase these lines
    const know = this.add.text(400, 250, 'Hello World!').setOrigin(0.5);
    know.setScale(1.5, 1.5);
    this.add.image(200, 200, 'logo').setScale(0.01, 0.01);
    this.add.sprite(100, 300, 'player');

    // Added cursors for moving player
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    this.player.body.setVelocity(0);

    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
    }

    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }
  }
}