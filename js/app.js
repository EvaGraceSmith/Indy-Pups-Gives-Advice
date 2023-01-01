'use strict';
console.log ('Hello from the js file');

function playDogSoundForSubmit(event){
  event.preventDefault;
  let ding = new Audio('../dog-talking-or-howling-72517.mp3');
  ding.play();
  alert ('Your question had been submitted.');
}

