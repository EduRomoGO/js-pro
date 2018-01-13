const {pack, range, currify, compose, map, partial, partialRight} = require('../functionalLib.js');
var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const sum = (a, b) => a + b;
const half = a => a/2;
const operation = (a, b, c) => a * b - c;
const mult = currify((a, b) => a * b);
// const mult = currify((...args) => args.reduce((prevValue, nextValue) => prevValue * nextValue, 1));
const mult10 = mult(10);

const numbersList = [1, 2, 3, 4];


describe('lib', () => {
    describe('range', () => {
        it('should return a range', () => {
            const range3 = range(3);

            expect(range(3, 6)).to.deep.equal([3, 4, 5, 6]);
            expect(range3(7)).to.deep.equal([3, 4, 5, 6, 7]);
        });
    });

    describe('partial', () => {
        it('should return a function if not all the params of the function that is being partially applied are provided', () => {
            expect(partial(sum, 100)).to.be.a('function');
        });
        
        it('should apply partially a function to a list of parameters, returning a function that can be applied to the rest of the parameters needed by the function to produce a value', () => {
            const sum100 = partial(sum, 100);
            const op = partial(operation, 3, 6);
            
            expect(sum(2, 3)).to.equal(5);
            expect(sum100(2)).to.equal(102);
            expect(op(2)).to.equal(16);
        });
    });
    
    describe('partial right', () => {
        it('should return a function if not all the params of the function that is being partially applied are provided', () => {
            expect(partialRight(sum, 100)).to.be.a('function');
        });

        it('should apply partially a function to a list of parameters, from right to left, returning a function that can be applied to the rest of the parameters needed by the function to produce a value', () => {
            const op1 = partialRight(operation, 1, 3);
            const op2 = partialRight(operation, 5);
            const op3 = partialRight(operation, 2, 3);
            
            expect(op1(2)).to.equal(-1);
            expect(op2(4, 3)).to.equal(7);
            expect(op3(4, 3, 0)).to.equal(12);
        });
        
    });

    describe('pack', () => {
        it('should return a function that use to take a list of arguments and now takes one argument that is this list as an array', () => {
            expect(sum(2,3)).to.equal(5);
            expect(pack(sum)([2,3])).to.equal(5);
        });
    });

    describe('currify', () => {
        it('should return a function', () => {
            expect(currify).to.be.a('function');
        });
        
        it('should return a function that will continue returning functions until all its necessary params has been filled', () => {
            expect(currify(sum)(3)).to.be.a('function');
            expect(currify(sum)(3, 4)).not.to.be.a('function');
        });

        it('should return a function when partially applied, and this function can be invoked with the rest of the params to produce a value', () => {
            const sum3 = currify(sum)(3);
            const mult = (a, b, c) => a * b * c;
            const cmult = currify(mult);
            const cmult2 = cmult(2);
            const cmult2y3 = cmult(2, 3);

            expect(sum3(7)).to.equal(10);
            expect(sum3(10)).to.equal(13);
            expect(cmult(2, 3, 4)).to.equal(24);
            expect(cmult2(3, 4)).to.equal(24);
            expect(cmult2(3)(4)).to.equal(24);
            expect(cmult2y3(5)).to.equal(30);
        });

        it('more examples', () => {
            const sum4 = currify((a, b, c, d) => a + b + c + d);

            expect(sum4(1, 1, 1)(1)).to.equal(4);
            expect(sum4(1, 1)(1, 1)).to.equal(4);
            expect(sum4(1)(1, 1, 1)).to.equal(4);
            expect(sum4(1)(1)(1)(1)).to.equal(4);
        })
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
        
        it('more examples', () => {
            const triangleArea = compose(half, mult);
            const triangleAreaPacked = compose(half, pack(mult));
            const myTriangle = {
                base: 4,
                height: 5
            };
            const getAreaData = triangle => [triangle.base, triangle.height]
            const areaFromTriangle = compose(triangleAreaPacked, getAreaData);
            
            expect(triangleArea(4, 5)).to.equal(10);
            expect(areaFromTriangle(myTriangle)).to.equal(10);
        });
    });

    describe('map', () => {
        it('should return an array', () => {
            const sum3 = currify(sum)(3);

            expect(map(sum3, numbersList)).to.be.an('array');
        });
        
        it('should apply the function passed to it to each elemen of the array passed to it', () => {
            const sum3 = currify(sum)(3);
            
            expect(map(sum3, numbersList)).to.deep.equal([4, 5, 6, 7]);
        });
        
        it('should not be able to be applied partially, because it is not currified', () => {
            try {
                const sum100 = currify(sum)(100);
                const mapPlus100 = map(sum100);
            } catch (e) {
                expect(e.name).to.equal('TypeError');
                expect(e.message).to.equal("Cannot read property 'map' of undefined");
            }
        }); 
        
        it('should be able to be applied partially, because it is currified', () => {
            const sum100 = currify(sum)(100);
            const cmap = currify(map);
            const mapPlus100 = cmap(sum100);

            expect(mapPlus100(numbersList)).to.deep.equal([101, 102, 103, 104]);
        }); 
    });
});