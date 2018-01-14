const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');
const {writters} = require('./data.js');
const {fizzBuzz, functionalFizzBuzz} = require('../exercisesSolutions/fizzBuzz.js');
const {correctIncomes} = require('../exercisesSolutions/basics.js');

const chai = require('chai');
const expect = chai.expect;


describe('exercises', () => {
    describe('fizzbuz', () => {
        const result = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz', 26, 'fizz', 28, 29, 'fizzbuzz'];

        it('should return an array with numbers from 1 to 30 replacing multiples of 3 by fizz, multiples of 5 by buzz and multiples of both by fizzbuzz', () => {
            expect(functionalFizzBuzz()).to.deep.equal(result);
            expect(fizzBuzz()).to.deep.equal(result);            
        });

        it('should return the same for both modes', () => {
            expect(fizzBuzz()).to.deep.equal(functionalFizzBuzz());
        });
    });


    describe('Given a collection of writters (in data.js), correctIncomes function', () => {
        it ('should correct a typo in their incomes that returns a new array whith only the incomes corrected multiplied by 1000', () => {
            expect(correctIncomes(writters)).to.deep.equal([ 93000, 44000, 98000, 13000 ]);
        });
    });
});