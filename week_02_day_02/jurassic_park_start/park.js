class Park{

  constructor(name, ticketPrice, dinosaurCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;

  }
  getParkName(){
    return this.name;
  }
  getTicketPrice(){
    return this.ticketPrice;
  }
  getDinosaurCollection(){
    return this.dinosaurCollection.length;
  }
  addDinosaur(dinosaur){
    this.dinosaurCollection.push(dinosaur);
  }
  removeDinosaur(dinosaur){
    this.dinosaurCollection.pop(dinosaur);
  }
  removeAllDinosaurs(){
    this.dinosaurCollection.splice(0, this.dinosaurCollection.length);
  }
  mostAttention(){



    for (let i = 0; i < dinosaur._guestsAttractedPerDay; i++) {
      if(dinosaur[i]._guestsAttractedPerDay >= 60){
        return dinosaur[i]._guestsAttractedPerDay;
      }
  }
}
// findSpecies(){
//   for loop
// }
}


module.exports = Park;
