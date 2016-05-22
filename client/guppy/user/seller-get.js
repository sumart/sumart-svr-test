/**
 * New node file
 */

var http = require('http')
	,defaultOption = require('../common/defaultOption')
	,qs = require('querystring');

var options = defaultOption.build("/guppy/seller/test", "GET");
options.headers['Content-Type'] = 'text/plain;charset=utf-8';

var body = {
};

console.log("defaultOption : ", options);

var req = http.request(options , function(res) {
	console.log('[RES] STATUS : ' + res.statusCode);
	console.log('[RES] HEADERS : ' , res.headers);
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('====RES BODY======\n' + chunk);
	});
});

req.on('error', function(e) {
	console.log("!!!! ERROR !!!!", e);
});

req.end();