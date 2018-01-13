const {pack, compose} = require('./functionalLib.js');

const mult = (a, b) => a * b;
const half = (a) => a/2;

const triangleArea = compose(half, mult);
const triangleAreaPacked = compose(half, pack(mult));
const myTriangle = {
    base: 4,
    height: 5
};
const getAreaData = triangle => [triangle.base, triangle.height]
const areaFromTriangle = compose(triangleAreaPacked, getAreaData);

console.log(triangleArea(4, 5));
console.log(Object.values(myTriangle));
console.log(areaFromTriangle(myTriangle));