var http = require('http')
	,defaultOption = require('./common/defaultOption')
	,qs = require('querystring');

var options = defaultOption.build("/guppy/test/simple", "POST");
options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

var body = {
		name:"한성준"
		, age:36
		, cars : [
	          "페라리", "Porsche", "마세라티" ]
		, years : [1991,1964,2000,2010]
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

if (body !== null && Object.keys(body).length > 0) {
	var bodyString = null; 
	if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8')
		bodyString = qs.stringify(body);
	else if (options.headers['Content-Type'] === 'application/json;charset=utf-8')
		bodyString = JSON.stringify(body);
	console.log('=== REQ BODY ===\n' + bodyString);
	req.write(bodyString);
}

req.end();