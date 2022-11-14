const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnTarget = Object.assign(target, source);

console.log(target);
console.log(returnTarget);
