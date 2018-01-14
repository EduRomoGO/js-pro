const {pack, range, currify, compose, map, partial, partialRight, first} = require('../functionalLib.js');
const {fizzBuzz, functionalFizzBuzz} = require('../exercises/fizzBuzz.js');

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
});