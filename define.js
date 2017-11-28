const smi = {temp: 0}

Object.defineProperty(smi, 'celsius', {
    get: function () {
        return this.temp * 3;
    },
    set: function (value) {
        this.temp = value / 3;
    }
});

console.log(smi.celsius);
smi.celsius = 30;
console.log(smi.temp);
console.log(smi.celsius);