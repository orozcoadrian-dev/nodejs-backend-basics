import fs, { readFileSync } from "node:fs";

const text = readFileSync("./code.txt", "utf-8");
console.log('Detallando el primer archivo el primer archivo:')
console.log(text);
console.log("");
///////////////////////////////////////////////////////////////
console.log('Aquí quiero hacer algo');
///////////////////////////////////////////////////////////////
console.log("");
const list = fs.readFileSync('./list.txt', 'utf-8');
console.log('Detallando el segundo archivo:');
console.log(list)
