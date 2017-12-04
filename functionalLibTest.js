const lib = require('./functionalLib.js');
var assert = require('assert');

const sum = (a, b) => a + b;
console.log(sum(2, 3) === 5);
console.log(lib.pack(sum)([2, 3]) === 5);

const range3 = lib.range(3);
console.log(lib.range(3, 6) === [3, 4, 5, 6]);
console.log(range3(7) === [3, 4, 5, 6, 7]);

describe('lib', () => {
    describe('range', () => {
        it('should return a range', () => {
            assert.equal(lib.range(3, 6), [3, 4, 5, 6]);
        });
    });
});