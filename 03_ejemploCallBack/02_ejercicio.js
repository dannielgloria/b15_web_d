/**
 * It reads the type of the variable and its value.
 * @param tipeValue - The type of the value.
 * @param value - The value to be passed to the function.
 */
function doTask(tipeValue, value){
    var text = 'La variable es de tipo ' + tipeValue + ' y su valor es '+ value
    return console.log(text)
}

function readValue(data) {
    var tipeValue = typeof data
    doTask(tipeValue, data);
}

readValue(01)