import  fs from 'node:fs';

const stats = fs.statSync("./code.txt");

console.log(stats.isFile()); 
console.log(stats.isDirectory()); 
console.log(stats.isSymbolicLink()); 
console.log(stats.size); 