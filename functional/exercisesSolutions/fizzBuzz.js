const {range} = require('../functionalLib.js');

function fizzBuzz () {
    const list = [];

    for (i = 1; i<=30; i++) {
        let el = i;

        if (i % 3 === 0) el = 'fizz';
        if (i % 5 === 0) el = 'buzz';
        if (i % 15 === 0) el = 'fizzbuzz';

        list.push(el);
    }

    return list;
}


const mult3 = n => n % 3 === 0;
const mult5 = n => n % 5 === 0;
const and = (pred1, pred2) => n => pred1(n) && pred2(n);
const replaceWhen = (condition, value) => n => condition(n) ? value : n;

function functionalFizzBuzz() {
    return range(1, 30)
        .map(replaceWhen(and(mult3, mult5), 'fizzbuzz'))
        .map(replaceWhen(mult3, 'fizz'))
        .map(replaceWhen(mult5, 'buzz'));
}

module.exports = {fizzBuzz, functionalFizzBuzz};