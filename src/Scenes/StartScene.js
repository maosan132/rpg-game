import 'phaser';
import MapScene from './MapScene';
import logo from '../assets/microverse_purple.png';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/RPG_assets.png';
import map from '../assets/map/map.json';
export default class StartScene extends Phaser.Scene {

  preload() {
    this.load.image('logo', logo);
    this.load.image('tiles', tiles);
    this.load.tilemapTiledJSON('map', map);
    this.load.spritesheet('player', player, { frameWidth: 16, frameHeight: 16 });
    console.log('preloader');
  }

  create() {
    let know = this.add.text(400,250, 'Hello World!');
    know.setScale(1.5, 1.5);
    this.add.image(200, 200, 'logo').setScale(0.1, 0.1);
    this.add.sprite(100, 300, 'player');
    //this.scene.start('MapScene');
    console.log('create');
  }

  update() {
  }

}