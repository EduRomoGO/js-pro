function Mammal () {
}

Mammal.prototype.breathe = function () { console.log('breathing');}

const mam = new Mammal();
mam.breathe();

function withCounter (Cls) {
    let counter = 0;

    function CountedMammal () {
        counter++;
    };

    CountedMammal.getInstanceCount = function() {
        console.log('counted: ', counter);
    };
    
    return CountedMammal;
}

const CountedMammal = withCounter(Mammal);

const cMam = new CountedMammal();
const cMam2 = new CountedMammal();
// cMam.__proto__ === CountedMammal.prototype

console.log(cMam === cMam2);
CountedMammal.getInstanceCount();