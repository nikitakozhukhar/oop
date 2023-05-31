import sum from '../basic';

import Character from '../Character';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('Correct name', () => {
  const char = new Character(name, type, attack, defence, health, level);

  expect(char.name).toBe(true)
})