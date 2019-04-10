const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;


  beforeEach( () => {
    // write your code here
    park = new Park('Jurrasic Park', 10, [dinosaur1, dinosaur2, dinosaur3]);
    dinosaur1 = new Dinosaur('Triceratops', 'herbivore', 30);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Allosaurus', 'carnivore', 60);
  })

  test('should have a name', () => {
    // write your code here

    expect(park.getParkName()).toBe('Jurrasic Park');
  });

  test('should have a ticket price', () => {
    // write your code here
    expect(park.getTicketPrice()).toBe(10);
  });

  test('should have a collection of dinosaurs', () => {
    // write your code here
    expect(park.getDinosaurCollection()).toBe(park.dinosaurCollection.length);
  });

  test('should be able to add a dinosaur to its collection', () => {
    // write your code here
    park.addDinosaur([dinosaur1]);
    expect(park.dinosaurCollection.length).toEqual(4);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    // write your code here
    park.removeDinosaur();
    expect(park.dinosaurCollection.length).toEqual(2);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    // write your code here
    expect(park.mostAttention()).toEqual(dinosaur3);
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    // write your code here

    expect(park.findDinosaur()).toBe('Allosaurus');

  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    // write your code here
    park.removeAllDinosaurs();
    expect(park.dinosaurCollection.length).toEqual(0);
  });

});
