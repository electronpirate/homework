const Player = require('../player');
const Card = require('../card');
const Game = require('../game');

describe('Game', () => {

  let player1;
  let player2;
  let players;

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let cards;
  let game;


  beforeEach(() => {

    player1 = new Player('Kaneki');
    player2 = new Player('Kirishima');
    players = [player1, player2];

    card1 = new Card('Kureo Mado', 7, 8, 9);
    card2 = new Card('Jason', 10, 6, 9);
    card3 = new Card('Rize Kamishiro', 7, 9, 10);
    card4 = new Card('Yoshimura The One Eyed Owl', 9, 8, 10);
    card5 = new Card('Ayato', 9, 9, 9);
    card6 = new Card('Tsukiyama', 6, 7, 8);
    cards = [card1, card2, card3, card4, card5, card6];

    game = new Game(player1, player2, cards);



  });

  test('game should have players', () => {
    expect(game.players).toEqual(game.players);

  });

  test('should have cards', () => {
    expect(game.cards).toEqual(game.cards);
  });

  test('game should be able to deal cards to players', () => {
    game.dealCard(card1);
    expect(player1.cards).toEqual([card1]);
  });

  test('game should be able to calculate the winner', () => {
    game.dealCard(card3);
    player1.selectCategory(card3.kagune);
    game.calculateWinner();
    const winner = game.players[0];
    expect(winner).toEqual(game.player1);
  });

});
