/* Importing the functions from the module. */
import http from 'http';
import { getName,getStar } from "./modulos";

const server = http.createServer((req,res) => {
    res.end('Trabajando con NodeJS + Babel chaboz');
}).listen(4001);

/* Calling the functions from the module. */
getName('Benito Juan Carlos Tercero De Maria Conchita De Jesus Hernandez');
getStar('Chabelo');

console.log('Checamos que funcione');

export default server;





