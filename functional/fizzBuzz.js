function fizzbuzz () {
    const list = [];

    for (i = 0; i<40; i++) {
        let el = i;

        if (i % 3 === 0) el = 'fizz';
        if (i % 5 === 0) el = 'buzz';
        if (i % 15 === 0) el = 'fizzbuzz';

        list.push(el);
    }

    return list;
}

console.log(fizzbuzz());