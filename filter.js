var fs = require('fs');

module.exports = function(dir, fileExt, cb) {
  fs.readdir(dir, function (err, list) {
    if(err) return cb(err);

    var chosenFiles = [];
    for (var i = 0; i < list.length; i ++) {
      var mystring = list[i];
      var mdXtn = mystring.split('.')[1];

      if (mdXtn == fileExt) {
        chosenFiles.push(mystring);
      }
    }

    return cb(null, chosenFiles);
  });
};

//do all filtering


