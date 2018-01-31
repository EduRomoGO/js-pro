const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');

const concat = currify((a, b) => a + b);
const greet = concat('hi ');
// const greet = n => `hi ${n}`;
const greetAll = names => names.map(greet);


const getSum = (numbers) => numbers.reduce((acc, nextVal) => acc + nextVal, 0);

const getGreatest = (numbers) => numbers.reduce((acc, nextVal) => acc > nextVal ? acc : nextVal, 0);

const mult = (a, b) => a*b;
const half = n => n/2;
const triangleArea = (triangle) => compose(half, mult)(triangle.base, triangle.height);

const sortList = (list) => list
    .sort((a, b) => a.price > b.price)
    .map(item => item.price);

module.exports = {greetAll, getSum, getGreatest, triangleArea, sortList};