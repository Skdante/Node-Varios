var http = require('http');
var dt = require('./HoraFecha');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.write("<p>Link that you access: " + req.url + "<p>");
	
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);