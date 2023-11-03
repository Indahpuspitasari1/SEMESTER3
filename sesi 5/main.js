// app.js
const greet = require("./modul1");
const calculateSum = require("./modul2");
const isEven = require("./modul3");
const square = require("./modul4");

console.log(greet("Indah"));
console.log("Sum:", calculateSum(5, 7));
console.log("Is 8 even?", isEven(8));
console.log("Square of 4:", square(4));
