(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

    constructor(name, dateOfBirth) {
      this.name = name;
      console.log('I am adding a new animal to the zoo!');

      // if there isn't a date of birth for the animal the defaul will be that it is
      // born and will use the current date and time.
      if(! (dateOfBirth instanceof Date) ){
        dateOfBirth = new Date();
      }
      this.dob = dateOfBirth;
    }

    age(){
      date = new Date();
      age = date.getFullYear() - this.dateOfBirth;
      console.log(age);

    };

    giveTheAnimalAName( newName ) {
      this.name = newName;
      this.organization = 'Castle Strasburg';
    }
    printName(){
      console.log(this.name + ' is the name of the animal at ' + this.organzation);
    }

  };

}());
