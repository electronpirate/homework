const Bus = function (routeNumber, distance, destination, passengers) {
  this.routeNumber = routeNumber;
  this.distance = distance;
  this.destination = destination;
  this.passengers = [];
}

Bus.prototype.addDistance = function () {
  this.distance += 10;
};

Bus.prototype.passengerCount = function () {
  return this.passengers.length;
};

Bus.prototype.addPassenger = function (passengers) {
  this.passengers.push(passengers);
};

Bus.prototype.removePassenger = function (passengers) {
  this.passengers.pop(passengers);
};

Bus.prototype.removeAllPassengers = function (passengers) {
  // this.passengers = []; this will work but...I think it could create problems
  this.passengers.splice(0, this.passengers.length); //this is unnatural but works
};

// Bus.prototype.addAllPassengers = function () {
//   for (passenger of this.passengers) {
//     this.addPassenger(passenger);
//   }
// };




module.exports = Bus;
