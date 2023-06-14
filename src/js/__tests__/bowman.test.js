import Bowman from '../class/Bowman';

const bowman = new Bowman('Arktur');

test('Объект создается', () => {
  const result = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Arktur', type: 'Bowman',
  };
  expect(bowman).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  bowman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'Arktur', type: 'Bowman',
  };
  expect(bowman).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	bowman.damage(10);
	const result = {
		attack: 30, defence: 30, health: 93, level: 2, name: 'Arktur', type: 'Bowman',
	  };
	expect(bowman).toEqual(result);
})
