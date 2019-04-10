class Park{

  constructor(name, ticketPrice, dinosaurCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
    this.findDinosaur = function(dinosaurCollection){
      return dinosaurCollection.filter(function(dinosaur){
        return dinosaur === 'Allosaurus';
      });
    }
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
    let charmingDinosaur = this.dinosaurCollection[0];

    for (var i = 1; i < this.dinosaurCollection.length; i++) {

      if(this.dinosaurCollection[i].guestsAttractedPerDay > charmingDinosaur.guestsAttractedPerDay){

        charmingDinosaur = this.dinosaurCollection[i];
      }
    }
    return charmingDinosaur;
  }



}



module.exports = Park;
