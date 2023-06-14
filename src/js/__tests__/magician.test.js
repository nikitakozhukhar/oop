import Magician from '../class/Magician';

const magician = new Magician('Arktur');

test('Объект создается', () => {
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Arktur', type: 'Magician',
  };

  expect(magician).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  magician.levelUp();
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'Arktur', type: 'Magician',
  };
  expect(magician).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	magician.damage(10);
	const result = {
		attack: 12, defence: 48, health: 94.8, level: 2, name: 'Arktur', type: 'Magician',
	  };
	expect(magician).toEqual(result);
})


