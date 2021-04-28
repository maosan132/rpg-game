import 'phaser';

const config = {
  backgroundColor: 0x0080ff,
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  defaultImage: './assets/microverse_purple.png',
  // disableContextMenu: true,
  gameTitle: 'SantosGame',
  hidePhaser: true,
  // scaleMode: .5,

};

export default config;