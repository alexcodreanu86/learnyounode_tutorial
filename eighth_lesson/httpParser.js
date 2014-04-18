var http = require('http');
var bl = require('bl');
var url = process.argv[2]
// http://npm.im/bl -documentation for bl
// http://npm.im/concat-stream -documentation for concat-stream

http.get(url, function(response){
  response.pipe(bl(function(err,data){
    if (err){
      console.error(err);
    };
    
    var content = data.toString()
    console.log(content.length);
    console.log(content);
  }))
})
