var http = require('http'); // http is a module
var testModule = require("./modules/testModule");

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!' + testModule.dateTime());
}).listen(8080);