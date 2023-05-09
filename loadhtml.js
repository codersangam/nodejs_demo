const http = require('http');
const { upperCase } = require('upper-case');

var data = `<h1>Hello World!</h1>
<input type="text" name="" id=""> <br> <br>
<input type="text" name="" id=""> <br> <br>
<input type="text" name="" id=""> <br> <br>


`;


http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write(upperCase("ok bye bye bye "))
    res.end();
}).listen(5001);