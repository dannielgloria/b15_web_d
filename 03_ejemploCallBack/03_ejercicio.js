/**
 * It takes two numbers and an operation as parameters, and returns the result of the operation applied
 * to the two numbers
 * @param num1 - The first number to be used in the operation
 * @param num2 - number
 * @returns The result of the operation
 */
function suma(num1,num2) {
    var result = num1 + num2
    return result
}

function resta(num1,num2) {
    var result = num1 - num2
    return result
}

function multiplicacion(num1,num2) {
    var result = num1 * num2
    return result
}

function calculator(a,b,operation){
    var result = operation(a,b)
    return console.log(result)
}

calculator('10',20.32,multiplicacion)