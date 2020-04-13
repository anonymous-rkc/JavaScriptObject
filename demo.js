'use strict'; 
(function() {
  function registerUser(firstName,lastName){
   var person = { 
      firstName,
      lastName
    };
    //display(person.firstName);
  }

registerUser("Anonynous-","rkc");

var person = { 
  firstName:"Anonymous",
  lastName:"rkc",
  age:17,
  isAdult() {return this.age >= 18}
};

display(person.isAdult());
display(Object.keys(person));
for(var x in person){
  display(x + " " +person[x]);
}
let healthStats = {
  height : 165,
  weight : 60
};

function mergeHealthStats(person,healthStats){
  return Object.assign({},person,healthStats);
}

let mergedPerson = mergeHealthStats(person,healthStats);

display(mergedPerson);
display(person);


})();