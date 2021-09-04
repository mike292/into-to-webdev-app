var http = require('http'); //Get http library and store it in var http

//.createServer - a function that creates a server 
//the createServer function takes anonymous function as parameter
//the anonymous function takes a parameter req(request) and res(response)
//200 - is code for success like 404 error in browser
//.writeHead(<numbercode>, type) //type - is telling the browser the content of the server in this case text
//.end - ends the response give the users the data/code to show in the browser
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Change again\n');
}).listen(8080, '127.0.0.1');//The URL which is 127.0.0.1:8080 that you can use in the browser

console.log('Server running at http://127.0.0.1:8080/'); //Simple string alert in cmd/gitBash when server runs