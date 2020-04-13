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

let employee= function(firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isAdult= function() {return this.age >= 18}
}

let sumit = new employee("Sumit","Singh",23);
let rahul = new employee("Rahul","Kumar",24);
display(sumit);
display(rahul);

let person2 = Object.create(
  Object.prototype,{
    firstName : {value:"Rahul",enumerable:true,configurable:true,writable:true},
    lastName : {value:"Kumar",enumerable:true,configurable:true,writable:true},
    age : {value:24,enumerable:true,configurable:true,writable:true},
  }
);

display(person2);
Object.defineProperty(person2,'firstName',{writable:false});
display(Object.getOwnPropertyDescriptor(person2,'firstName'));

})();