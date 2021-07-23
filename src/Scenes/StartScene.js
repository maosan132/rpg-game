import Phaser from 'phaser';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/new_assetsX2.png';
import map from '../assets/map/map.json';
import bg from '../assets/bg.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Start' });
  }

  preload() {
    this.load.image('tiles', tiles); // Objects (rocks)
    this.load.image('bg', bg); // World surface
    this.load.tilemapTiledJSON('map', map);
    this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 }); // hero1

    // load enemy characters
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);
  }

  create() {
    this.scene.start('MapScene');
  }
}