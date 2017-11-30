// function currify(fn) {
//     return function aux(...args) {
//     if (args.length >= fn.length)
//     return fn(...args);
//     else
//     return (...more) => aux(...args, ...more);
//     };
// }

module.exports = currify;

function currify(fn) {
    return function aux(...args) {
        if (args.length >= fn.length) return fn(...args);
        else return (...more) => aux(...args, ...more);
    };
}

const sum = (a, b) => a + b;

const csum = currify(sum);

console.log(csum(2, 3));
const sum3 = csum(3);
console.log(sum3(5));
console.log(sum3(7));