const fetch = require('cross-fetch');

fetch("https://www.simpsonsoptimizer.com/episodes/random/")
    .then((respuesta) => {
        return respuesta.json();
    }).then((resp) => {
        console.log(resp);
    })