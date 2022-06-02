/* A function that prints the name */
var getName = function(name){
    let infoName = 'Nombre: '+name
    return console.log(infoName);
};

/* A function that prints the name of a tv star */
var getStar = function (star) {
    let infoStar = 'Personaje de tv: ' + star
    return console.log(infoStar);
};

/* Exporting the functions getName and getStar to be used in other files. */
module.exports = {getName,getStar};