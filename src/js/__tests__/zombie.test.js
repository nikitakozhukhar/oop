import Zombie from '../class/Zombie';

const zombie = new Zombie('Arktur');

test('Объект создается', () => {
  const result = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Zombie',
  };

  expect(zombie).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  zombie.levelUp();
  const result = {
    attack: 48, defence: 12, health: 100, level: 2, name: 'Arktur', type: 'Zombie',
  };
  expect(zombie).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	zombie.damage(10);
	const result = {
		attack: 48, defence: 12, health: 91.2, level: 2, name: 'Arktur', type: 'Zombie',
	  };
	expect(zombie).toEqual(result);
})
