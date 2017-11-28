function partial (fn, ...args) {
    return (...newArgs) => fn(...args, ...newArgs);
}

function suma4 (a, b, c, d) { return a + b + c + d; }

const rsuma4 = currify(suma4);

function currify(fn) {
    // let allArgs = [];
    const alone = (...args) => {
        // allArgs.push(...args);
        // let callArgs = [];

        if (allArgs.length === fn.length) {
            // callArgs = [...allArgs];
            // allArgs = [];

            return fn(...args);
        } else {
            return alone; 
        }
    };

    return alone;
}

console.log(rsuma4(1, 1, 1, 1));
console.log(rsuma4(1, 1, 1)(1));
console.log(rsuma4(1, 1)(1, 1));
console.log(rsuma4(1)(1, 1, 1));
console.log(rsuma4(1)(1)(1)(1));

const suma5 = rsuma4(5);

console.log(suma5(1,1,1));
console.log(suma5(1,2,3));