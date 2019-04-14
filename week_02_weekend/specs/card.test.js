const Card = require('../card');

describe('Card', () => {

  let card1;

  beforeEach(() => {

    card1 = new Card('Kureo Mado', 7, 8, 9);
  });

  test('card should have a name', () => {
    expect(card1.name).toBe('Kureo Mado');
  });
  test('card should have strength' , () => {
    expect(card1.strength).toBe(7);
  });
  test('card should have agility' , () => {
    expect(card1.agility).toBe(8);
  });
  test('card should have kagune' , () => {
    expect(card1.kagune).toBe(9);
  });

});
