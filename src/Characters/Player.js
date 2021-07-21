import 'phaser';
import Unit from './Unit';
import HealthBar from '../Scenes/HealthBar';

export default class Player extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.setScale(1.2);
    this.flipX = true;
    this.healthBar = new HealthBar(scene, x - 40, y + 50);
  }
}