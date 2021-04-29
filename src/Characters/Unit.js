import 'phaser';

export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.type = type;
    this.hp = hp;
    this.maxHp = this.hp;
    this.damage = damage; // default damage
  }

  attack(target) {
    target.takeDamage(this.damage);
  }

  takeDamage(damage) {
    this.hp -= damage;
  }
}