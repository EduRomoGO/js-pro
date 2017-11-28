// @withCount
@bind('bark')
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} says wof wof`);
    }
}

function withCount(Constructor) {
    let count = 0;

    class CountedConstructor extends Constructor{
        constructor(...args) {
            count++;
            super(...args);
        }
    }

    CountedConstructor.getInstanceCount = function () {
        console.log(`instances counted ${count}`);
    }

    return CountedConstructor;
}

const doggy = new Dog('doggy');
const snoopy = new Dog('snoopy');
console.log(snoopy.name);
// Dog.getInstanceCount();

snoopy.bark();
snoopy.bark.call(doggy);

function bind(...methods){
    return function (Klass) {
        // const oldMethod = Klass.prototype[method];
        // Klass.prototype[method] = function() {
        //     oldMethod().call(Klass);
        // };

        return SubKlass extends Klass {
            constructor(...args) {
                super(...args);
                for (let method of methods) {
                    
                }
            }
        }
    };
}

