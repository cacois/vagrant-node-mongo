var http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1>Hello, World!</h1></body></html>");
    res.end();
}).listen(3000);

