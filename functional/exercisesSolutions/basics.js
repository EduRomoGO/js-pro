const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');

const concat = currify((a, b) => a + b);
const greet = concat('hi ');
// const greet = n => `hi ${n}`;
const greetAll = names => names.map(greet);

module.exports = {greetAll};