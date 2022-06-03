function ordenSuperiror(cadena,callback) {
    result = callback(cadena)
    return result;
}

function minus(cadena) {
    return console.log(cadena.toLowerCase());
}

function mayus(cadena) {
    return console.log(cadena.toUpperCase());
}

ordenSuperiror('CaRmEn sE Me pERdio la CadEnita PXnDX Uwu', minus, mayus)