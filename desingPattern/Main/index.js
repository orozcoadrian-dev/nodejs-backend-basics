// Import the division module.
const { div } = require("../Common/Operations/Division/Div");
console.log("El resultado de 50 / 2 es " + div(50,2) + ".");

//Import the multiplication module.
const { mul } = require("../Common/Operations/Multiplication/Mul");
console.log("El resultado de la multiplicación de 10 x 10 es " + mul(10,10) + ".");

//Import the subtraction module.
const { sub } = require("../Common/Operations/Substraction/Sub");
console.log("El resultado de la resta de 60 x 20 es " + sub(60,20) + ".");

//Import the sum module.
const { sum } = require("../Common/Operations/Sum/Sum");
console.log("El resultado de la suma de 99 + 1 es " + sum(99,1) + ".");