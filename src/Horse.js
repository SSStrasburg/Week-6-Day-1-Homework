(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Horse = class Horse extends Animal {

    constructor(name, dateOfBirth, ridable) {

      super(name, dateOfBirth);
      this.ridable = ridable;
      // attributes of animal now follow Horse
    }
  };

})();
