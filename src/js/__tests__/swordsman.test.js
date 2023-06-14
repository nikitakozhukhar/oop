import Swordsman from '../class/Swordsman';

const swordsman = new Swordsman('Arktur');

test('Объект создается', () => {
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Swordsman',
  };

  expect(swordsman).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  swordsman.levelUp();
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'Arktur', type: 'Swordsman',
  };
  expect(swordsman).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	swordsman.damage(10);
	const result = {
		attack: 48, defence: 12, health: 91.2, level: 2, name: 'Arktur', type: 'Swordsman',
	  };
	expect(swordsman).toEqual(result);
})