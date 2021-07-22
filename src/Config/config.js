import Phaser from 'phaser';

const config = {
  // backgroundColor: 0x0080ff,
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game',
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    // width: 800,
    // height: 600,
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
      debug: true,
    },
  },
  dom: {
    createContainer: true,
  },
  // defaultImage: './assets/microverse_purple.png',
  // disableContextMenu: true,
  gameTitle: 'SantosGame',
  // hidePhaser: true,
  // scaleMode: .5,
  // scene: [StartScene, FightScene, UserScene],

};

export default config;