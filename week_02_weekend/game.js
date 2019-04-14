class Game{
  constructor(players, cards){
    this.players = players;
    this.cards = cards;
    this.winner = null;
  }


// ----------------
// METHOD GOES HERE
// ----------------

// Game should be able to push cards to player inventory

dealCard(card){
  this.players.addCard(card);
}

// Game should be able to decide the winner

calculateWinner(){

if(this.cards[2] > this.cards[0]){
  this.winner = this.players[0];
}
}




};

module.exports = Game;
