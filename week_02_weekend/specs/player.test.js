const Player = require('../player');
const Card = require('../card');



describe('Player', () => {

  let player1;
  let player2;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

beforeEach(() => {

  player1 = new Player('Kaneki');
  player2 = new Player('Kirishima');

  card1 = new Card('Kureo Mado', 7, 8, 9);
  card2 = new Card('Jason', 10, 6, 9);
  card3 = new Card('Rize Kamishiro', 7, 9, 10);
  card4 = new Card('Yoshimura The One Eyed Owl', 9, 8, 10);
  card5 = new Card('Ayato', 9, 9, 9);
  card6 = new Card('Tsukiyama', 6, 7, 8);
});

  // TESTS
  test('should start with an empty card deck', () => {
    expect(player1.cards && player2.cards).toEqual([]);
  });

  test('should be able to draw card from card deck', () => {
    player1.addCard(card1);
    player2.addCard(card2);
    expect(player1.cards).toEqual([card1]);
    expect(player2.cards).toEqual([card2]);
  });

  test('should have a name', () => {
    expect(player1.name).toBe('Kaneki');
    expect(player2.name).toBe('Kirishima');
  });

  test('should be able to select category', () => {
    player1.addCard(card1);
    player2.addCard(card2);

    expect(player1.selectCategory(card1, 'agility')).toBe(8);
    expect(player2.selectCategory(card2, 'agility')).toBe(6);
  });

  test('player should be able to play the top card', () => {
    player1.addCard(card1);
    player1.playTopCard();
    expect(player1.cards).toEqual(card1);
  });


});
