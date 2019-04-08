const Bus = require('../bus');


let bus;


beforeEach(() => {
  bus = new Bus(22, 0, 'Ocean Terminal', []);
})


test('can add a distance to bus', () => {
  bus.addDistance();
expect(bus.distance).toBe(10);
})

test('get total number of passengers on bus', () => {
  bus.passengerCount();
expect(bus.passengers.length).toBe(0);
})

test('can add a passenger to bus', () => {
  bus.addPassenger('Pawel');
expect(bus.passengerCount()).toBe(1);
})

test('can drop a passenger off', () => {
  bus.removePassenger('Pawel');
  expect(bus.passengerCount()).toBe(0);
})

test('can remove all passengers', () => {
  bus.removeAllPassengers('Pawel', 'James', 'Hamish');
  expect(bus.passengerCount()).toBe(0);
})

xtest('can add all passengers', () => {
  bus.addAllPassengers('Pawel', 'James', 'Hamish');
  expect(bus.passengerCount()).toBe(3);
})
