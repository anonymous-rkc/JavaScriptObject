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


Object.defineProperty(person2,'fullName',{
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(fullName) {
    var nameParts = fullName.split(' ');
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
});
person2.fullName = 'Anonymous rkc';
display(person2.firstName);

function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
function Student(f,n){
  Person.call(this,f,n)
  this._enrolledCourses = [];
  this.enroll = function(courseId){
    this._enrolledCourses.push(courseId);
  };
  
}
display(Student.prototype.constructor);
Student.prototype = Object.create(Person.prototype);
display(Student.prototype.constructor);
Student.prototype.constructor = Student;
display(Student.prototype.constructor);
// display(Person.prototype);
// Person.prototype.age = 29
// let m = new Person("m","s");
// let j = new Person("j","s");
// m.age = 18;
// display(m.age);
// display(j.age);
// display(j.__proto__.__proto__);


})();