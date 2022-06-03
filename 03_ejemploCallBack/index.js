/**
 * Primer ejemplo de las diapositivas
 * 
 * The function entradaUsuario takes a function as an argument and calls it with the argument nombre
 * @param nombre - This is the name of the parameter that will be passed to the callback function.
 */
function saludar(nombre) {
    console.log('Hola '+ nombre);
}

function entradaUsuario(callback) {
    var nombre = "pepe juan";
    callback(nombre);
}

// saludar('Daniel')
// entradaUsuario(saludar)

/**
 * First() is a function that takes a second() function as an argument and calls it after 5 seconds
 * @param second - is a function that is passed as a parameter to the first function.
 */

function first(second) {
    setTimeout(function(){
        console.log('Primero');
        second();
    }, 5000)
    
};

function second() {
    console.log('Segundo');
};

// first(second);
