const http = require('http');
http.createServer(function (req, res) {
    res.write("Hello from node js ");
    res.end();
}).listen(5001);