import Daemon from '../class/Daemon';

const daemon = new Daemon('Arktur');
test('Объект создается', () => {
  const result = {
    attack: 10, defence: 40, health: 100, level: 1, name: 'Arktur', type: 'Daemon',
  };

  expect(daemon).toEqual(result);
});

test('Уровень повышается изменяются значения свойств attack, defence и level', () => {
  daemon.levelUp();
  const result = {
    attack: 12, defence: 48, health: 100, level: 2, name: 'Arktur', type: 'Daemon',
  };
  expect(daemon).toEqual(result);
});

test('Урон наносится, расчитывается уровень текущего здоровья', () => {
	daemon.damage(10);
	const result = {
		attack: 12, defence: 48, health: 94.8, level: 2, name: 'Arktur', type: 'Daemon',
	  };
	expect(daemon).toEqual(result);
})
