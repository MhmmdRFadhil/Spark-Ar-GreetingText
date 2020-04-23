// for version spark ar above v85 

const Scene = require('Scene');

var dateTime = new Date();
var greet = dateTime.getHours();

Promise.all ([

    Scene.root.findFirst('Greeting'), // get Object 2DText

]).then(function(result){

    const greeting = result[0];

    // You can change this logic time 
    if (greet > 19) { 
        greeting.text = "NIGHT"; 
      } else if (greet > 17) {
        greeting.text = "EVENING";
      } else if (greet > 12) {
        greeting.text = "AFTERNOON";
      } else if (greet >= 0) {
        greeting.text = "MORNING";
      }
})

// for version spark ar under v85

/*const Scene = require('Scene');

var dateTime = new Date();
var greet = dateTime.getHours();

const greeting = Scene.root.find('Greeting');

  if (greet > 19) { 
    greeting.text = "NIGHT"; 
  } else if (greet > 17) {
    greeting.text = "EVENING";
  } else if (greet > 12) {
    greeting.text = "AFTERNOON";
  } else if (greet >= 0) {
    greeting.text = "MORNING";
  }*/

