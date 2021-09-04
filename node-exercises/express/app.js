var express = require('express');//Requires to download/install express
var app = express(); //Creates an instance of express using express function

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});