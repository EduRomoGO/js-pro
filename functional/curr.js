function currify(fn) {
    return (...args) => {
        if (args.length >= fn.length) return fn(...args);
        else return (...more) => fn(...args, ...more);
    };
}

function totalCurrify(fn) {
    return function aux (...args) {
        if(args.length >= fn.length) return fn(...args);
        else return (...more) => aux(...args, ...more);
    };
}


const sum = (a, b) => a + b;
const mult = (a, b, c) => a * b * c;

const csum = currify(sum);
const cmult = currify(mult);
const tcmult = totalCurrify(mult);

const cmult2 = cmult(2);
const cmult2y3 = cmult(2, 3);
console.log('cmult ', cmult2(3, 5));
console.log('cmult2y3 ', cmult2y3(5));

const tcmult2 = tcmult(2);
const tcmult2y3 = tcmult2(3);
console.log('tcmult2y3 ', tcmult2y3(5));


console.log(csum(2, 3));
const sum3 = csum(3);
console.log(sum3(5));
console.log(sum3(7));



// map autocurrificado
const map = currify((fn, list) => {
    const result = [];
    list.forEach(n => result.push(fn(n)));
    return result;
});

// ejemplo de map normal
// const map = (fn, list) => {
//     const result = [];
//     list.forEach(n => result.push(fn(n)));
//     return result;
// };

// map currificado despues
// const cmap = currify(map);
    
const basicMap = (fn, list) => {    
    return list.map(n => fn(n));
}

const list = [1, 2, 3];
console.log(basicMap(csum(100), list));
// const basicMapPlus100 = basicMap(csum(100));
// console.log(basicMapPlus100(list)); no funciona porque no esta currificada
console.log(map(csum(100), list));
const mapPlus100 = map(csum(100));
console.log(mapPlus100(list));