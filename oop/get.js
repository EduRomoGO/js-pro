class Dog {
    constructor() {
    }

    get celsius () {
        return 20;
    }

    set celsius(val) {
        this.fare = val;
    }
}
let perro = new Dog();
console.log(perro.celsius);
perro.celsius = 2555
console.log(perro.fare);
