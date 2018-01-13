// Given a collection of writters (in data.js), 
// write a function to correct a typo in their incomes 
// that returns a new array whith only the incomes corrected multiplied by 1000
// Note: Name the function correctIncomes
// Log the result in the console

const {writters} = require('./data.js');
const {partial, compose} = require('../functionalLib.js');

// wrong, doesnt return a new array
// function correctIncomes () {
//     writters.forEach(item => item.incomes * 1000);
// }

// correct
// function correctIncomes () {
//     return writters.map(item => item.incomes * 1000);
// }


// using partial
// const mult = (a, b) => a * b;
// const mult1000 = partial(mult, 1000);
// function correctIncomes () {
//     return writters.map(item => item.incomes).map(mult1000);
// }

// using partial and compose
const mult = (a, b) => a * b;
const mult1000 = partial(mult, 1000);
const getIncomes = writer => writer.incomes;

function correctIncomes () {
    return writters.map(compose(mult1000, getIncomes));
}

const correctWritters = correctIncomes();
console.log(writters);
console.log(correctWritters);