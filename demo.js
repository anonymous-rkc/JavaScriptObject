'use strict'; 
(function() {

  var xhr = new XMLHttpRequest();
  var url = 'https://reqres.in/api/users'
  xhr.open('POST',url );
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    
      display(JSON.parse(this.responseText));

  };
  xhr.send('name=s&job=j');

  // var xhr1 = new XMLHttpRequest();
  // var url = 'https://reqres.in/api/users'
  // xhr1.open('POST',url , true);
  // xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  // xhr1.onload = function () {
    
  //     display(JSON.parse(this.responseText));

  // };
  // var data = JSON.stringify({
  //   name: 'Hubot',
  //   job: 'hubot',
  //   });
  // xhr1.send(data);


})();