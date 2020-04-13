'use strict'; 
(function() {
  function registerUser(firstName,lastName){
   var person = { 
      firstName,
      lastName
    };
    display(person.firstName);
  }

registerUser("Anonynous-","rkc");

})();