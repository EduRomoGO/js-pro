function compose (a, b) {
    return (...args) => {
        return a(b(...args));
    };
}

const mult = (a, b) => a * b;
const half = (a) => a/2;

const triangleArea = compose(half, mult);
const triangle = {
    base: 2,
    height: 5
}

console.log(triangleArea(Object.values(triangle)));
console.log(triangleArea(2, 5));