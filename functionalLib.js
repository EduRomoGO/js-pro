const lib = {
    pack: (fn) => {
        return (args) => {
            return fn(...args);
        }
    }
};

const sum = (a, b) => a + b;
console.log(sum(2, 3) === 5);

console.log(lib.pack(sum)([2, 3]) === 5);


module.exports = lib;