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
 * Ejemplo que se lo ocurrio al co-sensei Daniel 
 * 
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
    return 'Segundo';
};

// first(second);

/**
 * This function returns the number 100.
 * @returns 100
 */
function soyCien(){
    return 100;
}

/**
 * `soyDocientos()` returns the number 200
 * @returns 200
 */
function soyDocientos() {
    return 200;
}

/**
 * The sumaFunciones function takes two functions as arguments and returns the sum of the results of
 * those two functions.
 * @param functionOne - a function that returns a number
 * @param functionTwo - a function that returns a number
 * @returns function sumaFunciones(functionOne, functionTwo){
 *     const suma = functionOne() + functionTwo()
 *     return suma;
 * }
 */
function sumaFunciones(functionOne, functionTwo){
    const suma = functionOne() + functionTwo()
    return suma;
}

/* Calling the sumaFunciones function and passing the soyCien and soyDocientos functions as arguments. */
// console.log(sumaFunciones(soyCien, soyDocientos));

/* Calling the setTimeout function and passing a function as an argument. */
// setTimeout(function(){
//     console.log("He ejecutado la función");
// },6000);

console.log('ejecuto script INICIA')