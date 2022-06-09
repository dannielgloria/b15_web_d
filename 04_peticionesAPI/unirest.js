var unirest = require('unirest');

var req = unirest('GET','https://www.simpsonsoptimizer.com/episodes/random/')
    .end(function (res){
        if (res.error) throw new Error(res.error);
        console.log(res.raw_body);
    });