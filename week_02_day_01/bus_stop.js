const BusStop = function(name, queue){
  this.name = name;
  this.queue = [];
}

BusStop.prototype.passengerCount = function () {
  return this.queue.length;
};

BusStop.prototype.addPerson = function (queue) {
  this.queue.push(queue);
};

BusStop.prototype.clearQueue = function () {
  this.queue.splice(0, this.queue.length);
};


module.exports = BusStop;
