var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://www.simpsonsoptimizer.com/episodes/random/',
  'headers': {}
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});