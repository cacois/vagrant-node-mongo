var http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello, World!");
    res.end();
}).listen(3000);

