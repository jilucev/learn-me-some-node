var http = require('http');

var arg = process.argv;
var url = arg[2];

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(drop) {
    console.log(drop);
  });
});







// require('http').get(process.argv[2], function(stream) {
//   stream.setEncoding('utf8');
//   //function(stream)
//   stream.on('data', (function(data) {
//     console.log(data);
//   }
//   stream.on('error', (function(err) {
//     throw err;
//   });
// });