const {pack} = require('./functionalLib.js');

function compose (a, b) {
    return (...args) => {
        return a(b(...args));
    };
}

const mult = (a, b) => a * b;
const half = (a) => a/2;

const triangleArea = compose(half, mult);
// const triangleAreaPacked = compose(half, pack(mult));
// console.log(triangleAreaPacked);
const triangle = {
    base: 2,
    height: 5
}

console.log(triangleArea(2, 5));
console.log(Object.values(triangle));
// console.log(triangleArea(triangleAreaPacked(Object.values(triangle))));