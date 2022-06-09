var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://www.simpsonsoptimizer.com/episodes/random/',
    headers:{}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error){
        console.error(error);
    });