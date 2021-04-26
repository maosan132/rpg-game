import phaser from 'phaser';
import StartScene from './Scenes/StartScene';
import MapScene from './Scenes/MapScene';

//import TitleScreen from './scenes/TitleScreen';
//import Game from './scenes/Game';

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
    }
  }
};

const game = new Phaser.Game(config);

game.scene.add('StartScene', StartScene);
// game.scene.add('game', Game);

// game.scene.start('titlescreen');
game.scene.start('StartScene');


