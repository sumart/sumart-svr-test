/**
 * 예제1. mongoose 홈페이지의 Getting Started 에 나오는 예제
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	var kittySchema = mongoose.Schema({
		name:String
	});
	
	// Schema 에 Method 를 추가함
	kittySchema.methods.speak = function() {
		var greeting = this.name?"My name is " + this.name : "I don't have name";
		console.log(greeting);
	}
	
	var Kitten = mongoose.model('Kitten', kittySchema);
	
	var silence = new Kitten({
		name:"Silence"
	});
	console.log(silence.name);
	
	var fluffy = new Kitten({
		name:"Fluffy"
	});
	fluffy.speak();
	
	fluffy.save(function (err, fluffy) {
		if(err) {
			console.error(err);
			return;
		}
		console.log("SAVED");
		fluffy.speak();
	});
	
	Kitten.find({
		name:/^F/
	}, function(err, data){
		console.log(data);
	});
	
});