function partial (fn, ...args) {
    return (...newArgs) => fn(...args, ...newArgs);
}

function suma (a, b) {
    return a+b;
}

const suma100 = partial(suma, 100);

console.log(suma(2,3));
console.log(suma100(2));

function operation (a, b, c) {
    return a * b - c;
}

function partialRight(fn, ...args) {
    return (...newArgs) => fn(...newArgs, ...args);
}

const op1 = partialRight(operation, 1, 3);
const op2 = partialRight(operation, 5);
const op3 = partialRight(operation, 2, 3);

console.log(op1(2));
console.log(op2(4, 3));
console.log(op3(4, 3, 0));