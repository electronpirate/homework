const Bus = require('../bus');
const Person = require('../person');


let bus;
let person1;
let person2;
let person3;

beforeEach(() => {
  person1 = new Person("John", 29);
  person2 = new Person("Sue", 29);
  person3 = new Person("Dave", 29);
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

test('can add all passengers', () => {
  bus.addAllPassengers([person1, person2, person3]);
  expect(bus.passengerCount()).toBe(3);
})
