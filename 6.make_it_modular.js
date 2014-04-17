var fileFilter = require('./filter.js');

var processRv = process.argv;
var dir = processRv[2];

var myfunc = function (err, res) {
  if (err) throw err;
  

  for (var i = 0; i < res.length; i ++) {
    console.log(res[i]);
  }
};

fileFilter(dir, 'md', myFunc);

//passing myFunc, not calling it, and 
//nicknaming it 'cb.' We can later choose
//when to call cb.

//print solution