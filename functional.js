function throttle(fn, ms) {
    let lastExec = 0;
    
    return function (...args) {
        let now = new Date();

        if (now - lastExec > ms) {
            lastExec = now;
            return fn.call(this, ...args);
        }
    };
}

// const slowLog = throttle(console.log, 10);
const slowLog = debounce(console.log, 10);

for (let i = 0; i<100000; i++) slowLog(i);


function debounce(fn, ms) {
    let id = 0;

    return function (...args) {
        setTimeout(() => {
            let now = new Date();
    
            if (now - lastExec > ms) {
                lastExec = now;
                return fn.call(this, ...args);
            }
        }, ms);
    };
}