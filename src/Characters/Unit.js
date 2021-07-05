import 'phaser';

// A unit is either a player or an enemy
export default class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.type = type;
    this.hp = hp;
    this.maxHp = this.hp;
    this.damage = damage; // default damage
    this.living = true;
    this.menuItem = null;
  }

  // Notify menu item as per unit is dead
  setMenuItem(i) {
    this.menuItem = i;
  }

  attack(target) {
    // 'living' check if the current player is alive
    if (target.living) {
      target.takeDamage(this.damage);
      this.scene.events.emit('Message', `${this.type} attacks ${target.type}:
                                       ${this.damage} damage`);
    }
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.menuItem.unitKilled();
      this.living = false; // this.alive = false;
      this.visible = false;
      this.menuItem = null;
    }
  }
}