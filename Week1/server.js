var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome \n');
}).listen(8000, "localhost");
console.log('Server running at http://localhost:8000/');