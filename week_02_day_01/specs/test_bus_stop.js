const Bus_stop = require('../bus_stop');


let bus_stop;


beforeEach(() => {
  bus_stop = new Bus_stop('Ocean Terminal', []);
})


test('get number of people in queue', () => {
  bus_stop.passengerCount();
  expect(bus_stop.queue.length).toBe(0);
})

test('add person to queue', () => {
  bus_stop.addPerson('Pawel');
  expect(bus_stop.passengerCount()).toBe(1);
})

test('clear queue', () => {
  bus_stop.clearQueue('Pawel', 'Hamish', 'James');
  expect(bus_stop.passengerCount()).toBe(0)
})
