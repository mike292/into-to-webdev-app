var express = require('express');
var app = express();

app.get('/Cheer.txt', function (request, response) {
    response.end('You are very beauttiful');
});

app.get('/Jeer.txt', function(request, response){
    response.end('You are not nice!');
});

//Or var server = app.listen(8080);
var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});