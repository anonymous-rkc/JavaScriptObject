'use strict'; 
(function() {
let person = {
  firstName : 'Rahul',
  lastName : 'Kumar'
};

person.age = 24;
person.isAdult = function(){return this.age > 18;};
display(person.isAdult());

})();