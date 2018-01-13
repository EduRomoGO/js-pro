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
    map
};

module.exports = lib;