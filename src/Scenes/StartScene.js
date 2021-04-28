import 'phaser';
import logo from '../assets/microverse_purple.png';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/new_assetsX2.png';
import map from '../assets/map/map.json';
import bg from '../assets/bg.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';

// const StartScene = new Phaser.Class({
//   Extends: Phaser.Scene,

//   initialize: function StartScene ()
//   {
//       Phaser.Scene.call(this, { key: 'StartScene' });
//   },

// })
export default class StartScene extends Phaser.Scene {
  preload() {
    this.load.image('logo', logo); // MV logo
    this.load.image('tiles', tiles); // Objects (rocks)
    this.load.image('bg', bg); // World surface
    this.load.tilemapTiledJSON('map', map); 
    this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 }); // hero1
    console.log('preloader');

    // load enemy characters
    this.load.image('enemy1', 'assets/enemy1.png');
    this.load.image('enemy2', 'assets/enemy2.png');
  }

  create() {
    this.scene.start('FightScene');
    console.log('create');
  }

  update() {
  }
}