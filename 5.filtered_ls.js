var fs = require('fs');

var path = (process.argv[2]);
var fileExt = (process.argv[3]);

fs.readdir(path, function(err, files){
  if(err) {
    console.log('error!');
  } else {
    for (var i = 0; i < files.length; i ++ ) {
      var filesArray = files[i].split(".");
      var file_extension = (filesArray[filesArray.length -1]);
  
    if (fileExt == file_extension && filesArray.length > 1) {
      console.log(files[i]);
    }
  }
  }
})