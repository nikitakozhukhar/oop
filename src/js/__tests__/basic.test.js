import sum from '../basic';

import Character from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

const char = new Character("Neil", 'Swordsman');

test('Check name', () => {
  expect(char.name).toBe('Neil')
})

test('Check attack', () => {
  expect(char.attack).toBe(40)
})

test('Check deffence', () => {
  expect(char.defence).toBe(10)
})

// test('Correct type', () => {
    
//   test.each([
//     ['Bowman', 25, 25],
//     ['Swordsman', 40, 10],
//     ['Magician', 10, 40],
//     ['Daemon', 10 ,40],
//     ['Undead', 25, 25],
//     ['Zombie', 40, 10]
//   ])
//   ('check character type is %s attack %i defence %j', (type, attack, defence) => {
    
//     expect(char.attack).toBe(attack)
//   })
  
// });