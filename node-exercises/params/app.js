var express = require('express');
var app = express();


//request - How to get user/client input on this server
//response - What the server does to give the user/client
//req.params.name - is to get the value of the :name in the URL /team/:name
//:name - any string the user inputs
app.get('/team/:name', function(req, res){
  res.setHeader('Content-Type','text/plain');
  res.send("You picked " + req.params.name);
});

var server = app.listen(8080);