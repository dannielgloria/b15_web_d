/**
 * The function muestraMSN() takes a callback function as an argument and executes it
 * @returns undefined
 */
function mensajeDeBienvenida() {
    return console.log ('Adios mundo cruel, Hola mundo JS');
}

function muestraMSN(callback){
    return callback();
}

muestraMSN(mensajeDeBienvenida);