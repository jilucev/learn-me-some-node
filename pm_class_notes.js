// Look at the highly suspect dictionary file and display a count of words for each letter in the alphabet.

var fs = require('fs');
var filePath = 'user/share/dict/words';

var counters = {};
var contents = fs.readFileSync(filePath, {encoding: 'utf8'});

var stream = createReadStream(filePath {encoding: 'utf8', flags: 'r'});
console.log(stream);

stream.on('readable', function() {
  console.log('readable now');
  //logic to read the contents
});
// contents = contents.split("\n");

// //the last line in the dictionary is undefined, so we add a
// // -1 to avoid getting an error.

// for(var i = 0; i < contents.length -1; i ++) {
//   var word = contents.[i];
//   var firstLetter = word[0].toLowerCase();
//   counters[letter] = (counters[letter] || 0)+1;
//   //counter is originally undefined. If we don't use
//   // || to assign it to zero, it will return NaN

// }

// console.log(counters);
// console.log(process.memoryUsage());






// var counters = {
//   a: 0,
//   b: 0,
//   c: 0,
//   d: 0,
//   e: 0,
//   f: 0,
//   g: 0,
//   h: 0,
//   i: 0,
//   j: 0,
//   k: 0,
//   l: 0,
//   m: 0,
//   n: 0,
//   o: 0,
//   p: 0,
//   q: 0,
//   r: 0,
//   s: 0,
//   t: 0,
//   u: 0,
//   v: 0,
//   w: 0,
//   x: 0,
//   y: 0,
//   z: 0

// }