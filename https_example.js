var https = require('https');


var options = {
  host: 'example.org',
  path: '/'
};

var callback = function (response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}
console.log("I'm about to make a request");
https.request(options, callback).end();
console.log("I've made a request");