import Undead from '../class/Undead';

const undead = new Undead('Arktur');

test('Объект создается', () => {
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Arktur', type: 'Undead',
  };

  expect(undead).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  undead.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'Arktur', type: 'Undead',
  };
  expect(undead).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	undead.damage(10);
	const result = {
		attack: 30, defence: 30, health: 93, level: 2, name: 'Arktur', type: 'Undead',
	  };
	expect(undead).toEqual(result);
})
