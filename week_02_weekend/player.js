class Player {
  constructor(name){               // player class has property
    this.name = name;
    this.cards = [];             // which is an array of cards and name
  }


  // ----------------
  // METHOD GOES HERE
  // ----------------


// player should be able to select top card and play it
addCard(card){
  this.cards.push(card);
};
selectCategory(category){
  const getCardCategory = this.cards.findIndex((category) => {
    return category === this.cards.kagune;
  });
};
  playTopCard(){
  this.cards = this.cards.pop();
};




}


module.exports = Player;
