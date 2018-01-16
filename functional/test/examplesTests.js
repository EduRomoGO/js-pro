const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');
const {writters, names, numbers} = require('./data.js');
const {fizzBuzz, functionalFizzBuzz} = require('../exercisesSolutions/fizzBuzz.js');
const {correctIncomes} = require('../exercisesSolutions/medium.js');
const {greetAll, getSum} = require('../exercisesSolutions/basics.js');

const chai = require('chai');
const expect = chai.expect;


describe('examples', () => {

    describe('map', () => {
        it ('returns a new array different from the one it is invoked upon', () => {
            expect(numbers).to.deep.equal(numbers.map(item => item));
            expect(numbers !== numbers.map(item => item)).to.be.true;
        });

        it ('the array returned is the same length as the one it is invoked upon', () => {
            expect(numbers.length).to.deep.equal(numbers.map(item => item).length);
        });

        it ('receives a function that will be applied to each element of the array', () => {
            const numbers = [2, 3, 4];
            const double = n => 2*n;

            expect(numbers.map(double)).to.deep.equal([4, 6, 8]);
        });
    });
});