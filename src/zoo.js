(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Horse = window.zoo.Horse;
  let Camel = window.zoo.Camel;
  let Giraffe = window.zoo.Giraffe;

// new camels to add
  let humpDay = new Camel('humpDay', new Date('1/1/1992'), 1 );
  console.log( humpDay );
  let wednesday = new Camel('wednesday', new Date('1/1/2000'), 1 );
  let humpyDumpty = new Camel('humpyDumpty', new Date('1/1/1981'), 2 );
  let friday = new Camel('friday', new Date('1/1/1977'), 2 );

//new horses to add
  let spirit = new Horse('spirit', new Date('1/1/1998'), true );
  let nepolian = new Horse('nepolian', new Date('1/1/2010'), true );
  let goliath = new Horse('goliath', new Date('1/1/2008'), true );
  let solario = new Horse('solario', new Date('1/1/2004'), false );

//new Giraffes to add
  let wilber = new Giraffe('wilber', new Date('1/1/1990'), false );
  let bumbleBee = new Giraffe('bumbleBee', new Date('1/1/2002'), true );
  let felicia = new Giraffe('felicia', new Date('1/1/2000'), true );
  let jen =  new Giraffe('jen', new Date('1/1/1988'), false );
  console.log(felicia.giveBirth('babyJen') );
  console.log(felicia.giveBirth('beyonce') );
  console.log(felicia.giveBirth('dorie') );
  console.log(felicia.children);

// //trainers
//   let steven = new trainers('steven', new Date('1/1/1983'), true );
//   let alex = new trainers('alex', new Date('1/1/1987'), true );
//   let russel = new trainers('russel', new Date('1/1/1978'), true );

})();
