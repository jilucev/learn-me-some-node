var fileFilter = require('./filter.js');

var processRv = process.argv;
var dir = processRv[2];


fileFilter(dir, 'md', function(err, res) {
  if (err) throw err;
  

  for (var i = 0; i < res.length; i ++) {
    console.log(res[i]);
  }
});

//print solution