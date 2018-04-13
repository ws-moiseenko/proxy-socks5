'use strict';

var
	socks5 = require('simple-socks'),
	server = socks5.createServer().listen(1080);
