const lib = {
    pack: (fn) => {
        return (args) => {
            return fn(...args);
        }
    },
    currify: (fn) => {
        return function aux (...args) {
            if (args.length >= fn.length) return fn(...args);
            else return (...more) => aux(...args, ...more);
        };
    }
};

module.exports = lib;