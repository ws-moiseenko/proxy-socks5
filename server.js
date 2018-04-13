'use strict';

var
	socks5 = require('simple-socks'),
	server = socks5.createServer().listen(process.env.PORT || 1080);

// When a reqest arrives for a remote destination
server.on('proxyConnect', function (info, destination) {
	console.log('connected to remote server at %s:%d', info.host, info.port);

	destination.on('data', function (data) {
		console.log(data.length);
	});
});

server.on('proxyData', function (data) {
	console.log(data.length);
});

server.on('proxyError', function (err) {
	console.error('unable to connect to remote server');
	console.error(err);
});

server.on('proxyEnd', function (response, args) {
	console.log('socket closed with code %d', response);
	console.log(args);
});