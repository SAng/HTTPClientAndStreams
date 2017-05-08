var https = require('https');


var options = {
  host: 'example.org',
  path: '/'
};

var callback = function () {
  console.log('In response handler callback!');
}
console.log("I'm about to make a request");
https.request(options, callback).end();
console.log("I've made a request");