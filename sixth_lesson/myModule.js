var pathModule = require('path');  
var fs = require('fs');
function dirParser(path, extension, callback){
  fs.readdir(path, function(err, data){
    if (err){
      return callback(err);
    }

    matches = data.filter(function(file){
      return pathModule.extname(file) === "." + extension
    })

    callback(err, matches)

  })
}

module.exports = dirParser;