class Mammal {
    breathe() { console.log('breathing');}
}

const mam = new Mammal();

function withCounter (Cls) {
    let counter = 0;
    const SubCls = class extends Cls {
        constructor() {
            super();
            counter++;
        };
    }

    SubCls.getInstanceCount = function () {
        console.log('counted: ', counter);
    }
    
    return SubCls;
}

const CountedMammal = withCounter(Mammal);

new CountedMammal();
new CountedMammal();
new CountedMammal();

CountedMammal.getInstanceCount();