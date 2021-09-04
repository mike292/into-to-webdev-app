var express = require('express');
var app = express();

//express.static(<Directory location>) - Provide/serve this whole directory to the user
//__dirname - The this entire file location 
//Ex: C:\Users\Mike\Documents\intro-to-webdev-app\node-exercises\static-assets
// /public - is the folder contains all the web files
app.use(express.static(__dirname + '/public'));

var server = app.listen(8080);