const { sum } = require('./Functions/Sum/sum');
const { sub } = require('./Functions/Substract/sub');
const { div } = require('./Functions/Division/div');
const { mul } = require('./Functions/Multiplication/mul');

console.log("La suma es " + sum(1,9));
console.log("La resta es " + sub(10,5));
console.log("La división es " + div(10,5));
console.log("La multiplicación es " + mul(10,10));