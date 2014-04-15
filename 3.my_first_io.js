var fs = require('fs');

var fileName = process.argv[2];
var text = fs.readFileSync(fileName).toString();
var newArray = text.split("\n");
var lineNumber = newArray.length;
console.log(lineNumber - 1);

