const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(journey){
    return  journey.startLocation
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(journey){
    return  journey.endLocation
  })

};

Traveller.prototype.getJourneysByTransport = function (expected) {
  return this.journeys.filter(function(journey){
    return journeys.transport === expected;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(journey){
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(total, distance){
    return total += distance.distance
  },0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map(function(journey){
    return journey.transport;

  });
.filter(transport, index, arr) => {
  return arr.indexOf(transport) === index;
})

};


module.exports = Traveller;
