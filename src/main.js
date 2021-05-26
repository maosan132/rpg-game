import 'phaser';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import MapScene from './Scenes/MapScene';
import UserScene from './Scenes/UserScene';
import FightScene from './Scenes/FightScene';

const game = new Phaser.Game(config);

game.scene.add('StartScene', StartScene);
game.scene.add('MapScene', MapScene);
game.scene.add('FightScene', FightScene);
game.scene.add('UserScene', UserScene);

game.scene.start('StartScene');