const {partial, compose} = require('../functionalLib.js');

// wrong, doesnt return a new array
// function correctIncomes (writters) {
//     writters.forEach(item => item.incomes * 1000);
// }

// correct
// function correctIncomes (writters) {
//     return writters.map(item => item.incomes * 1000);
// }


// using partial
// const mult = (a, b) => a * b;
// const mult1000 = partial(mult, 1000);
// function correctIncomes (writters) {
//     return writters.map(item => item.incomes).map(mult1000);
// }

// using partial and compose
const mult = (a, b) => a * b;
const mult1000 = partial(mult, 1000);
const getIncomes = writer => writer.incomes;

function correctIncomes (writters) {
    return writters.map(compose(mult1000, getIncomes));
}


const sortList = (list) => list.sort((a, b) => a.price > b.price);


module.exports = {correctIncomes, sortList};