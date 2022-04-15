const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('please turn off the motor');
  setTimeout(()=>{
      console.log("please turn off the motor! its a gentle reminder");
  },3000);
  //setTimeout  do not block the programme execution 
});


console.log("the script is running");

myEmitter.emit('WaterFull');
console.log("the script is still running");

// myEmitter.emit('event');