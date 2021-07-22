/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars*/
import Phaser from 'phaser';
import tiles from '../assets/map/spritesheet.png';
import player from '../assets/new_assetsX2.png';
import map from '../assets/map/map.json';
import bg from '../assets/bg.png';
import enemy1 from '../assets/enemy1.png';
import enemy2 from '../assets/enemy2.png';
import button from '../assets/button.png';
import button2 from '../assets/button2.png';
import box from '../assets/grey_box.png';
import checkedBox from '../assets/blue_boxCheckmark.png';
import bgmusic from '../assets/bgmusic.mp3';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    const bg2 = this.add.image(160, 0, 'bg2');
    const title = this.add.image(155, 70, 'title');
    title.setScale(1.3);
    this.load.image('tiles', tiles); // Objects (rocks)
    this.load.image('bg', bg); // World surface
    this.load.tilemapTiledJSON('map', map);
    this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 }); // hero1

    // load enemy characters
    this.load.image('enemy1', enemy1);
    this.load.image('enemy2', enemy2);

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(100, 120, 120, 20);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 10,
      text: 'Loading...',
      style: {
        font: '10px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 10,
      text: '0%',
      style: {
        font: '12px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 30,
      text: '',
      style: {
        font: '10px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${+(value * 100 | 0)}%`);
      progressBar.clear();
      progressBar.fillStyle(0x000000, 1);
      progressBar.fillRect(100, 120, 120 * value, 20);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Asset loaded: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    // load assets needed in our game
    this.load.image('btn', button);
    this.load.image('btn2', button2);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox);
    this.load.audio('bgMusic', [bgmusic]);
  }

  ready() {
    this.scene.start('Welcome');
  }
}