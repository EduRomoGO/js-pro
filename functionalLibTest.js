const lib = require('./functionalLib.js');

const sum = (a, b) => a + b;
console.log(sum(2, 3) === 5);
console.log(lib.pack(sum)([2, 3]) === 5);