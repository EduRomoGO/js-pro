const {pack, range, currify} = require('../functionalLib.js');
var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const sum = (a, b) => a + b;

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