const http = require('http');

var data = [
    { "test": "Hello from node jsss" },
    { "name": "sangam" },
    { "age": "26" },
    { "edu": "btech" },

];


http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(data));
    res.end();
}).listen(50001);