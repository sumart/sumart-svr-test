var http = require('http')
	,defaultOption = require('../common/defaultOption')
	,qs = require('querystring');

var options = defaultOption.build("/guppy/shop", "POST");
options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

var body = {
		userId:'test'
		,name:'부천오피생생 오가피 가시샵'
		,phones:['032-321-9999', '032-333-8888']
		,phoneNames:['매장직통', '상담원']
		,address:'경기도 부천시 원미구 상1동 반달상가 202호'
		,categoryCodes:['01', '02', '03']
		,businessDayComment:'3째주 토요일 휴무'
		,businessHours:[
            'X', '0900-2000', '0900-2000', '0900-2000', '0900-2000', '0900-2000', '1000-1700']
		,shortComment:'우리 상점은 생생한 오가피와 오피를 판매하는데여? 근데 어쩔까여?'
		,keywords:['오가피','오피','음료']
		,coordLat:65.233
		,coordLong:36.911
		,hasImages:'false'
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