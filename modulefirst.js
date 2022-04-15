// //commom js module use 
// const  simple = require('./moduleSecound')

// simple();

import simple3 from "./module.mjs";
import {simple2 as simple} from "./module.mjs"
import * as a2 from "./module.mjs"
simple();
simple3();
console.log(a2);
console.log(a2.simple2());