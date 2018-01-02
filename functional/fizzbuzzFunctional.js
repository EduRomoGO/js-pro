const mult3 = n => n % 3 === 0;
const mult5 = n => n % 5 === 0;
const mult15 = n => n % 15 === 0;

const range = n => {
    let range = [];
    for (i = 1; i<=n; i++) range.push(i);

    return range;
}

console.log(range(10));