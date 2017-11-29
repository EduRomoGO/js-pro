const lib = {
    pack: (fn) => {
        return (args) => {
            return fn(...args);
        }
    }
};

module.exports = lib;