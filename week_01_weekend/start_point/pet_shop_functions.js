
myFunctions = {
  // Write your functions here

  getName(petShop){                        // function returns name of the petshop
    return petShop.name;
  },

  getTotalCash(petShop){                  // function returns total cash from the petshop admin
    return petShop.admin.totalCash;
  },

  addOrRemoveCash(petShop, cash){         // function depending on which numerical argument(10 or -10) we pass on will either increment or decrement the total cash

    petShop.admin.totalCash += cash;

  },

  getPetsSold(petShop){                   // function returns the number of pets sold
    return petShop.admin.petsSold;
  },

  increasePetsSold(petShop, pets){       // function to increase the number of pets sold by a numerical argument(2) passed on
    petShop.admin.petsSold += pets;
  },

  getStockCount(petShop){               // function returns number of pets in an object array by applying length method
    return petShop.pets.length;
  },

  getPetsByBreed(petShop, breed){      // function returns total number of a specific breed(British Shorthair) by looping through all pets and if pet breed is matching the one we want it is pushed to an empty array(in this case there's 2 pets of that breed). Then we just return the lenght of our array. That also works for the next test.
    let petBreed = [];
    for (let pet of petShop.pets) {
      if (pet.breed == breed) {
        petBreed.push(pet)
      };
    };
    return petBreed.length;

  },
  getPetByName(petShop, petName){     // function returns an object from pets array if the name of pet passed on as an argument equals to the one in an object.
    for (let pet of petShop.pets){
      if (pet.name == petName) {
        return pet;
      };
    };
      return undefined;               // or it returns undefined if name of pet is not found
  },

  removePetByName(petShop, petName){
    for (let i = petShop.pets.length-1; i >= 0; i--) {    // looping through pets from the end of an array at the set counter, checking the condition before next iteration of loop and decrementing by one each time gives us the position of Arthur in array
      if (petShop.pets[i].name == petName){         // Arthur meets the condition...
        petShop.pets.splice(i, 1);                  // ...and is removed at position 'i'
      };
    };
  },

  addPetToStock(petShop, newPet){      // function adding new to the end of pets array
    petShop.pets.push(newPet);
  },
  getCustomersCash(customers){         // returning cash value of the first customer in array
    return customers.cash;
  },

  getCustomersCashTotal(customers){
    let total = 0;                                  // set total at 0
    for (let i = 0; i < customers.length; i++) {    // loop through all customers
      total += customers[i].cash;                   // ...and add all cash to variable and return it
    }
    return total;
  },

  removeCustomerCash(customers, cash){
    return customers.cash -= cash;                         // function takes the cash of first customer in an array and substracts by passed on argument

  },

  getCustomerPetCount(customers){
    return customers.pets.length;                 //returns array length per customer passed on as argument
  },

  addPetToCustomer(customers, newPet){            // adds a new pet to array
    customers.pets.push(newPet);
  },

  customerCanAffordPet(customers, newPet){
    if (customers.cash >= newPet.price) {
    return true;                                  // returns truthy or falsy
  }else{
    return false;
  };

  },

  sellPetToCustomer (petShop, pet, customer){

    if (pet){                                                 // if pet is available or not
      if (myFunctions.customerCanAffordPet(customer, pet)){   // ...and if customer can afford pet

       myFunctions.addPetToCustomer(customer, pet);
       myFunctions.increasePetsSold (petShop, 1);               // functions recyle...
       myFunctions.removeCustomerCash (customer, pet.price);
       myFunctions.addOrRemoveCash (petShop, pet.price);
     };
   };
  }








};

module.exports = myFunctions;
