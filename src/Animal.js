(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

    constructor(name, dateOfBirth) {
      if (name.stringtype === 'string') {
        let newError = new Error('You did not enter a string');
        throw name;
      } else if (dateOfBirth.stringlength >= 4 ) {
        let newError = new Error('You did not enter a number');
        throw name;
      }
        this.name = name;
        console.log('I am adding a new animal to the zoo!');


      // if there isn't a date of birth for the animal the defaul will be that it is
      // born and will use the current date and time.
      if(! (dateOfBirth instanceof Date) ){
        // could throw out if not assigning new date as now
        dateOfBirth = new Date();
      }
      this.dob = dateOfBirth;

    }

// age returns years old
// if date is not above 3 characters long then
// a propor date will be given from current server time
    age( date ){
      if( !(typeof date === 'number' )) {
        let newError = new Error('You did not enter a number between 1900 - 2100')
        throw date;
      }else if( date >= 1900 || date <= 2100 ){
      date = new Date();
      }
      return (date.getFullYear() - this.dateOfBirth);
    };

    giveTheAnimalAName( newName ) {
      if (!(typeof newName === 'string')){
        let newError = new Error('Big mistake!  You need a string')
        throw newError;
      };
      this.name = newName;
      this.organization = 'Castle Strasburg';
    }
    printName(){
      console.log(this.name + ' is the name of the animal at ' + this.organzation);
    }

  };

}());
