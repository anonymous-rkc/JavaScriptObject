'use strict'; 
(function() {
let person = {
  firstName : 'Rahul',
  lastName : 'Kumar',
  age :18,
  isAdult : function(){return this.age >= 18;}
};

display(person.isAdult());

})();