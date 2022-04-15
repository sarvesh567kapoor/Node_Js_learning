// Node.js program to demonstrate the   
// os.freemem() method
  
// Allocating os module
const os = require('os');
  
// Printing os.freemem() value
var free_memory = os.freemem();
console.log(free_memory);

console.log(os.totalmem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.type());
console.log(os.release());