import 'phaser';

const Unit = new Phaser.Class({
  Extends: Phaser.GameObjects.Sprite,

  initialize: function Unit(scene, x, y, texture, frame, type, hp, damage) {
    Phaser.GameObjects.Sprite.call(this, scene, x, y, texture, frame);
    this.type = type;
    this.hp = hp;
    this.maxHp = this.hp;
    this.damage = damage; // default damage
  },

  attack(target) {
    target.takeDamage(this.damage);
  },

  takeDamage(damage) {
    this.hp -= damage;
  }
});

const Enemy = new Phaser.Class({
  Extends: Unit,

  initialize: function Enemy(scene, x, y, texture, frame, type, hp, damage) {
    Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
  },
});


/***************************************************** */
export default class Unit extends Phaser.GameObjects.Sprite {

  constructor() {
    super();
    this.type = type;
    this.hp = hp;
    this.maxHp = this.hp;
    this.damage = damage; // default damage
  }

  attack(target) {
    target.takeDamage(this.damage)
  }

  takeDamage(damage) {
    this.hp -= damage;
  }

}

/***************************************************** */


export default class FightScene extends Phaser.Scene {
  preload() {}

  create() {
    // Run UserScene parallelly
    this.scene.launch('UserScene');

    // Set background to green color
    this.cameras.main.setBackgroundColor('rgba(200, 100, 120, 0.5)');
  }

  update() {
  }
}