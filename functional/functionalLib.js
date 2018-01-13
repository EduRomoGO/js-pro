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

const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs);

const partialRight = (fn, ...args) => (...newArgs) => fn(...newArgs, ...args);

const compose = (...fns) =>
    fns.reverse().reduce((prevFn, nextFn) => 
        (...args) => nextFn.call({}, prevFn.call({}, ...args))
    );

const map = (fn, list) => list.map(n => fn(n));

const lib = {
    pack,
    currify, 
    range,
    partial,
    compose,
    map,
    partialRight
};

module.exports = lib;