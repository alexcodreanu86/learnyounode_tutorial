var dirParser = require('./myModule')
var path = process.argv[2];
var extension = process.argv[3]
dirParser(path, extension, function(err, data){
  if(err){
    console.error("There was an error", err);
  }

  data.forEach(function(file){
    console.log(file)
  })
})