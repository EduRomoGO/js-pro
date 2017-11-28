function sumUntil(n) {
    if (n === 0) return 0;
    return n + sumUntil(n - 1);
}

console.log(sumUntil(4));