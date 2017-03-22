(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Camel = class Camel extends Animal {
    //this makes the connection between Camels and Animals
    //all attributes of Animals now follow to the Camels

/**
 * New animal created
 *  string
 *  Date
 */
    constructor(name, dateOfBirth, humpNumber) {
      //execute the constructor of the parent class (Animal)
      super(name, dateOfBirth); // must do super because
      this.humpNumber = humpNumber
      //adding specific Camel stuff
      this.ridable = true;
    }




  };

})();
