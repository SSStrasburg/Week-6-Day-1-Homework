(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Giraffe = class Giraffe extends Animal {

    constructor(name, dateOfBirth, matingAge, height) {
// all attributes of animal now follows to Giraffe
      super(name, dateOfBirth);
      this.matingAge = matingAge;
      this.height = height;
      this.children = [];
    }

    giveBirth(name){
      let babyGiraffe = new window.zoo.Giraffe(name, new Date() );
      this.children.push(babyGiraffe);
      return babyGiraffe;
    }



  };

}());
