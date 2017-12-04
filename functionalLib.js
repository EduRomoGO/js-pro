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


const lib = {
    pack,
    currify, 
    range
};

module.exports = lib;