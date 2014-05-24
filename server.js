var http = require('http');
var items = [];
var server = http.createServer(function(req, res) {
	switch (req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				console.log('parsed', chunk);
				item += chunk;
			});
			req.on('end', function() {
				console.log('done parsing');
				items.push(item);
				res.end('OK\n');
			});
			break;
		case 'GET':
			items.forEach(function (item, i) {
				res.write(i + ')' + item + '\n');
			});
			res.end();
			break;
	}
	
});
server.listen(3000);