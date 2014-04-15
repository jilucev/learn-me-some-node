var fs = require('fs');


var fileName = (process.argv[2]).toString();
  fs.readFile(fileName, {encoding: 'utf8'}, function(err, data) {
  if(err) {
    console.log('error!');
  } else {
    contentsArray = data.split("\n");
    numberOfLines = contentsArray.length;
    console.log(numberOfLines -1);
  }
});

