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

    // Adding some more physics
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

    // Cameras
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    // Animation of player's walking
    this.anims.create({
      key: 'lefty',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'righty',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'upy',
      frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'downy',
      frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
      frameRate: 10,
      repeat: -1,
    });

    // Player should collide with obstacles
    
  }

  update() {

    // player movements
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }

    if (this.cursors.left.isDown) {
      this.player.anims.play('lefty', true);
      this.player.flipX = true;
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('righty', true);
      this.player.flipX = false;
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('upy', true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('downy', true);
    } else {
      this.player.anims.stop();
    }
  }


}