import  os  from 'node:os';

console.log('Información de mi sistema operativo');
console.log('------------------------------------');
console.log('Nombre del sistema operativo ', os.platform());
console.log('Versión de mi sistema operativo ', os.release());
console.log('CPUs', os.cpus());
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria total', os.totalmem() / 1024 / 1024);