import 'phaser';
import Unit from './Unit';
import HealthBar from '../Scenes/HealthBar';

export default class Enemy extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.setScale(0.7);
    this.healthBar = new HealthBar(scene, x + 20, y - 15);
  }
}
