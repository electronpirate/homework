const Person = require('../person');

let person;


beforeEach(() => {
  person = new Person('Pawel', 40);

})

test('get persons name', () => {
  person.getName();
  expect(person.name).toBe('Pawel')
})

test('get persons age', () => {
  person.getAge();
  expect(person.age).toBe(40);
})
