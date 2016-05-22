/**
 * 간단하게 INSERT 와 UPDATE 실행하는 예제임
 */

var MongoClient = require('mongodb').MongoClient
	, format = require('util').format;

var host = 'localhost';
var port = 27017;

console.log(format("connecting to %s:%s", host, port));
MongoClient.connect(format("mongodb://%s:%s/SALES",host, port), function(err, db) {
	if (!err) {
		var emp = db.collection('emp');
		emp.insert({
			eno:1101
			,fname:"한"
		}, function(err, records){
			if (err) {
				console.log(err);
				throw err;
			}
			db.close();
			console.log("Record added as "+records[0]._id);
		});
		return;
	} 
	
	console.log(err);
});
