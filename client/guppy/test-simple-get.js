var http = require('http')
	,defaultOption = require('./common/defaultOption');


var body = {
};

console.log("defaultOption : ", defaultOption.build("/guppy/test/simple", "GET"));
var req = http.request(defaultOption.build("/guppy/test/simple", "GET"), function(res) {
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

if (body != null && Object.keys(body).length > 0) {
	req.write(JSON.stringify(body));
}

req.end();