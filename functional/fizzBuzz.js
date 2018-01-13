// Write a function that returns an array with numbers from 1 to 50 replacing multiples of 3 by fizz, multiples of 5 by buzz and multiples of both by fizzbuzz

const {range} = require('./functionalLib.js');

function fizzBuzz () {
    const list = [];

    for (i = 0; i<40; i++) {
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
    return range(1, 50)
        .map(replaceWhen(and(mult3, mult5), 'fizzbuzz'))
        .map(replaceWhen(mult3, 'fizz'))
        .map(replaceWhen(mult5, 'buzz'));
}

console.log(fizzBuzz());
console.log(functionalFizzBuzz());