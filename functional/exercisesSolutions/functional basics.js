// Given a collection of writters (in data.js), 
// write a function to correct a typo in their incomes 
// that returns a new collection where each writter incomes are multiplied by 1000
// Note: Name the function correctIncomes
// Log the result in the console

const {writters} = require('./data.js');

// wrong, doesnt return a new collection
// function correctIncomes () {
//     writters.forEach(item => item.incomes * 1000);
// }

// correct
function correctIncomes () {
    return writters.map(item => {
        const itemCopy = Object.assign({}, item);

        itemCopy.incomes *= 1000;

        return itemCopy;
    });
}

const correctWritters = correctIncomes();
console.log(writters);
console.log(correctWritters);