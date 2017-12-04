
const mapSeriesPromise = (fn, promises) => {
    const results = [];

    function aux (...args) {
        const resolve = args.shift();
        const reject = args.shift();

        if (args.length === 0) return resolve(results);
        else {
            const prom = args.shift();
            prom
                .then(val => {
                    fn(val).then(mappedVal => {
                        results.push(mappedVal);
                        aux(resolve, reject, ...args);
                    })
                    // results.push(fn(val));
                });
        }
    }

    return new Promise((resolve, reject) => aux(resolve, reject, ...promises)) ;
};


const double = n => 2*n;
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// const promisesWithError = [Promise.resolve(1), Promise.resolve(2), Promise.reject(new Error('rare'))];
const p = mapSeriesPromise(double, promises);
// const pErr = mapSeriesPromise(double, promisesWithError);

p.then(console.log).catch(console.log);
// pErr.then(console.log).catch(console.log);