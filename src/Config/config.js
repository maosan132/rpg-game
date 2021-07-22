import Phaser from 'phaser';

const config = {
  // backgroundColor: 0x0080ff,
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game',
  },
  parent: 'game',
  width: 320,
  height: 240,
  zoom: 1,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  gameTitle: 'SantosGame',
  scaleMode: 0.5,
};

export default config;