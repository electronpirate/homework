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



    for (let i = 1; i < this.dinosaurCollection.length; i++) {
      if(this.dinosaurCollection[i].guestsAttractedPerDay >= 60){
        return this.dinosaurCollection[i].guestsAttractedPerDay;
      }
  }
}
// findSpecies(){
//   for loop
// }
}


module.exports = Park;
