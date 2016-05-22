/**
 * New node file
 */

module.exports = (function() {
	var options = {};
	
	function getOption(uri, method) {
		return {
//			host:"192.168.0.12"
			host:"localhost"
//			host:"goodjoon.iptime.org"
			,port:8081
//			,port:9080
			,path:uri
			,"method":method
			,headers : {
				'Content-Type' : 'application/json;charset=utf-8'
			}
		};
	}
	
	options.build = function(uri, method) {
		return getOption(uri, method);
	}
	
	return options;
})();