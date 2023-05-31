export default class Character {

	constructor(name, type, attack, defence, health = 100, level = 1) {
		if (name.length >= 2 && name.length <= 10) {
			this.name = name;
		} else {
			throw new Error('name is incorrect');
		}
		if (type === 'Bowman'
			|| type === 'Swordsman'
			|| type === 'Magician'
			|| type === 'Daemon'
			|| type === 'Undead'
			|| type === 'Zombie') {
			this.type = type;
		} else {
			throw new Error('type is incorrect');
		}

		this.health = health;
		this.level = level;

		if (type === 'Bowman') {
			this.attack = 25;
			this.defence = 25;
		}
		if (type === 'Swordsman') {
			this.attack = 40;
			this.defence = 10;
		}
		if (type === 'Magician') {
			this.attack = 10;
			this.defence = 40;
		}
		if (type === 'Daemon') {
			this.attack = 10;
			this.defence = 40;
		}
		if (type === 'Undead') {
			this.attack = 25;
			this.defence = 25;
		}
		if (type === 'Zombie') {
			this.attack = 40;
			this.defence = 10;
		}
	}

	levelUp() {
		this.level += 1;
		this.attack *= 1.2;
		this.defence *= 1.2;
		if (this.health > 0) {
			this.health = 100;
		}
	}

	damage(point) {
		if (point && this.health >= 0) {
			this.health -= point * (1 - this.defence / 100);
			return this.health
		}
	}
}
