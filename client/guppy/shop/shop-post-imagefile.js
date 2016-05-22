var http = require('http')
	,defaultOption = require('../common/defaultOption')
	,qs = require('querystring')
	,request = require('request')
	,fs = require('fs')
	,util = require('util')
	,path = require('path');

//var requestUrl = 'http://goodjoon.iptime.org:8080';
var requestUrl = 'http://localhost:8081';
requestUrl += '/guppy/shop/image?shopId=0b60745c682a47eda5a6fa8ae51dafc9&hasMoreImage=false';
var fileSrcDir = '/Users/korean44/src/eclipse_workspace/AquaTester/data/shop_images';
//var fileSrcDir = '/Users/korean44/TEMP/shop_images/2013/10/16/xx';
var imageFieldPrefix = 'imageData';

//for (var i = 0 ; i < 500 ; i++) { (function() {
fs.readdir(fileSrcDir, function(error, files) {
	
	
	var req = request.post(requestUrl, function(error, response, body) {
		console.log("=== RESPONSE BODY ===");
		console.log(util.inspect(body));
	});
	
	var form = req.form();
	for (var index in files) {
		var fullFilePath = path.join(fileSrcDir, files[index]);
		
		(function(index, fullFilePath) { 
				if (path.extname(fullFilePath).toLowerCase() === '.jpg') {
					form.append(imageFieldPrefix + index, 
							fs.createReadStream(fullFilePath));
					console.log(fullFilePath);
				}
			}
		)(index, fullFilePath);
	}
});

//})();} //--