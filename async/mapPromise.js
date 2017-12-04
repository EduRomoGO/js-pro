const mapPromise = (fn, promises) => {
    return new Promise((resolve, reject) => {
        Promise.all(promises)
            .then(values => resolve(values.map(value => fn(value))))
            .catch(reject);
    });
};


const double = n => 2*n;
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
const promisesWithError = [Promise.resolve(1), Promise.resolve(2), Promise.reject(new Error('rare'))];
const p = mapPromise(double, promises);
const pErr = mapPromise(double, promisesWithError);

p.then(console.log).catch(console.log);
pErr.then(console.log).catch(console.log);