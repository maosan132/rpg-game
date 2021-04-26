import 'phaser';

const config = {
  width: 800,
  height: 500,
  backgroundColor: 0x0080ff,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  defaultImage: './assets/microverse_purple.png',
  //disableContextMenu: true,
  gameTitle: 'SantosGame',
  hidePhaser : true,
  scaleMode: 2,
};

export default config;