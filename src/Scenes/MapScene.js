import Phaser from 'phaser';

export default class MapScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MapScene' }); // TODO: find out what key does -> answer: is an alias for this scene
  }

  create() {
    // Set the background
    this.add.image(240, 240, 'bg');

    // Set map tileset
    const map = this.make.tilemap({ key: 'map' });

    const tiles = map.addTilesetImage('spritesheet', 'tiles');
    // const grass = map.createLayer('Grass', tiles, 0, 0); // Overrode by bg above #create 1st line
    const obstacles = map.createLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]); // set all obstacles to collide

    // Creating the player with physics
    this.player = this.physics.add.sprite(50, 100, 'player', 3);

    // Adding some more physics and world boundaries
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);

    // Added cursors for moving player
    this.cursors = this.input.keyboard.createCursorKeys();

    // Cameras
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true; // avoid tile bleed

    // Animation of player's walking
    this.anims.create({
      key: 'lefty',
      frames: this.anims.generateFrameNumbers('player', { frames: [4, 10, 4, 16] }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'righty',
      frames: this.anims.generateFrameNumbers('player', { frames: [4, 10, 4, 16] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'upy',
      frames: this.anims.generateFrameNumbers('player', { frames: [5, 11, 5, 17] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'downy',
      frames: this.anims.generateFrameNumbers('player', { frames: [3, 9, 3, 15] }),
      frameRate: 10,
      repeat: -1,
    });

    // Player should collide with obstacles (rocks)
    this.physics.add.collider(this.player, obstacles);

    // Plant 30 zones for battle when player touches them
    this.seeds = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
    let arr = new Array(30).fill(1); // Create an array of 30 items, to use as an iterator
    arr.forEach(() => {
      const x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      const y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      this.seeds.create(x, y, 20, 20);// Parameters of seed zones
    });

    this.physics.add.overlap(this.player, this.seeds, this.onMeetEnemy, false, this); // Collider

    this.sys.events.on('wake', this.wake, this); // Listen for wake event
  }

  wake() {
    this.cursors.left.reset();
    this.cursors.right.reset();
    this.cursors.up.reset();
    this.cursors.down.reset();
  }

  onMeetEnemy(zone) {
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

    // shake the world
    this.cameras.main.shake(300);

    this.input.stopPropagation();

    // switch to FightScene
    this.scene.switch('FightScene');
  }

  update() {
    // player movements
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-50);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(50);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-50);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(50);
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