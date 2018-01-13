const pack = (fn) => {
    return (args) => {
        return fn(...args);
    }
};

const currify = (fn) => {
    return function aux (...args) {
        if (args.length >= fn.length) return fn(...args);
        else return (...more) => aux(...args, ...more);
    };
};

const range = currify((from, to) => {
    const range = [];
    for (let i = from; i <= to; i++) range.push(i);
    return range;
});

function partial (fn, ...args) {
    return (...newArgs) => fn(...args, ...newArgs);
}

// const compose = (...fns) => {
//     return function aux (...args) {
//         const lastFn = fns.pop();
//         console.log(fns);
//         console.log(lastFn);
//         console.log(fns.length);
//         console.log(args);

//         if (fns.length === 0) return lastFn.apply({}, args);
//         else if (fns.length > 0) aux(lastFn.apply({}, args));
//     }
// }

const compose = (...fns) =>
    fns.reverse().reduce((prevFn, nextFn) => 
        (...args) => nextFn.call({}, prevFn.call({}, ...args))
    );


// const sum = (a, b) => a + b;
// const half = a => a/2;

// const sumHalf = compose(half, sum);
// console.log(sumHalf(20, 30));

const lib = {
    pack,
    currify, 
    range,
    partial,
    compose
};

module.exports = lib;