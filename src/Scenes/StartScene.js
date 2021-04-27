import 'phaser';
import logo from '../assets/microverse_purple.png';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/RPG_assetsX2.png';
import map from '../assets/map/map.json';
import bg from '../assets/bg.png';

// const StartScene = new Phaser.Class({
//   Extends: Phaser.Scene,

//   initialize: function StartScene ()
//   {
//       Phaser.Scene.call(this, { key: 'StartScene' });
//   },

// })
export default class StartScene extends Phaser.Scene {
  preload() {
    this.load.image('logo', logo);
    this.load.image('tiles', tiles);
    this.load.image('bg', bg);
    this.load.tilemapTiledJSON('map', map);
    this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32});
    console.log('preloader');
  }

  create() {
    this.scene.start('MapScene');
    console.log('create');
  }

  update() {
  }
}