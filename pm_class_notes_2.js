var fs = require('fs');
var filePath = 'user/share/dict/words';

var counters = {};
var contents = fs.readFile(filePath, {encoding: 'utf8'}, function(err, data) {
  if(err) {
    console.log('error!');

  } else {
    console.log('success');
    contents = contents.split('\n');

    for(var i = 0; i < contents.length -1; i ++) {
      var word = contents.[i];
      var firstLetter = word[0].toLowerCase();
      counters[letter] = (counters[letter] || 0)+1;
    }
    console.log('counters: ' counters);
  }
});


//this won't work: bc readFile returns immediately
  //console.log('counters: ' counters);