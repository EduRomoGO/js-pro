class Dog {
    constructor(name) {
        this.name
    }

    // @prevent
    // @deprecated()
    // @readonly
    // @deprecatedMsg('im deprecated!')
    // @trace
    // @debug
    @katch
    bark() {
        console.log('wof');
        throw 'except';        
        return 'wof';
    }
    
    @benchmark
    sit() {
        console.log('im gonna sit');
    }
    
    barkAndSit() {
        this.bark();
        this.sit();
    }
}

const spot = new Dog('spot');

// spot.bark = () => console.log('guau');

// spot.bark();

function readonly (target, key, descriptor) { 
    const desc = Object.assign({}, descriptor);

    desc.writable = false;

    return desc;
}

function deprecated () {
    return (target, key, descriptor) => {
        console.log('method deprecated');
        // descriptor.value();

        return descriptor;
    };
}

function trace (target, key, descriptor) {
    const value = descriptor.value;

    descriptor.value = (...args) => {
        const val = value(...args);
        console.log(`metodo ${key} invocado con args ${args} y valor de retorno ${val}`);
    }
    
    return descriptor;
}
// global.debug = true;
// spot.bark('aaaa', 'bbbbb');
spot.barkAndSit();

function benchmark(target, key, descriptor) {

}


// En este caso tenemos una excepcion que se lanza en el metodo bark, y ahi es donde la capturamos, pero el programa viene ejecutado mediante spot.barkAndSit(); por lo que si global.debug is false, continuamos la ejecucion del programa por donde se pueda, en este caso ejecutando this.sit();

// Otro apunte es la necesidad de pasar this a la ejecucion del value del descriptor (ie, el propio metodo),
// ya que si no se lo pasamos, lo que ocurre es que se pierde, y da error

function katch (target, key, descriptor) {
    const value = descriptor.value;

    descriptor.value = function (...args) {
        try {
            value.call(this, ...args);
        } catch (e) {
            console.log(e);
            if (global.debug === true) {
                throw e;
            } else if (global.debug === false) {
                return undefined;
            }
        }
    }

    return descriptor;
}

function deprecatedMsg(msg) {
    return (target, key, descriptor) => {
        const desc = Object.assign({}, descriptor);

        desc.value = function(...args) {
            console.log(msg + ` ${key} method dixit`);
            descriptor.value.call(this, ...args);
        }
            
        return desc;
    };
}

// Escribe un decorador @catch
// ○ Captura excepciones que lance el método
// ○ Las loguea por la consola
// ○ si window.debug es true, relanza la excepción
// ○ si window.debug es false, continúa la ejecución


function debug(target, key, descriptor) {
    const value = descriptor.value;

    descriptor.value = (...args) => {
        console.log(`global.debug is ${global.debug}`);
        if (global.debug === true) value();
    }

    return descriptor;
}

// funtion prevent (msg) {
//     return (target, key, descriptor) => {
//         descriptor.value = () => console.log(msg);
//         return descriptor; 
//     };
// }
