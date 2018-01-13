const {pack, range, currify, compose} = require('../functionalLib.js');
var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const sum = (a, b) => a + b;
const half = a => a/2;
const mult10 = a => a*10;

const range3 = range(3);
console.log(range(3, 6) === [3, 4, 5, 6]);
console.log(range3(7) === [3, 4, 5, 6, 7]);

describe('lib', () => {
    describe('range', () => {
        it('should return a range', () => {
            expect(range(3, 6)).to.deep.equal([3, 4, 5, 6]);
        });
    });

    describe('pack', () => {
        it('should return a function that use to take a list of arguments and now takes one argument that is this list as an array', () => {
            expect(sum(2,3)).to.equal(5);
            expect(pack(sum)([2,3])).to.equal(5);
        });
    });

    describe('compose', () => {
        const sumHalf = compose(half, sum);
        
        it('should return a function', () => {
            expect(sumHalf).to.be.a('function');
        });

        it('should execute all the functions passed to it from right to left with the arguments passed to it', () => {
            expect(sumHalf(20, 30)).to.equal(25);
            expect(sumHalf(10, 2)).to.equal(6);
            expect(compose(mult10, half, sum)(10, 2)).to.equal(60);
            expect(compose(mult10, sumHalf)(10, 2)).to.equal(60);
        });
    });
});



const csum = currify(sum);

console.log(csum(2, 3));
const sum3 = csum(3);
console.log(sum3(5));
console.log(sum3(7));

const mult = (a, b, c) => a * b * c;
const cmult = currify(mult);

console.log(cmult(2, 3, 4));
const cmult2 = cmult(2);
console.log(cmult2(3, 4));
console.log(cmult2(3)(4));