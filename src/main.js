import config from './Config/config';
import StartScene from './Scenes/StartScene';
// import MapScene from './Scenes/MapScene'
// import TitleScreen from './scenes/TitleScreen';
// import Game from './scenes/Game';

const game = new Phaser.Game(config);

game.scene.add('StartScene', StartScene);
//game.scene.add('game', MapScene);

game.scene.start('StartScene');