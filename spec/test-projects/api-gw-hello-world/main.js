/*global exports, console*/
exports.apiConfig = function () {
	'use strict';
	return {
		'hello': { methods: ['GET']}
	};
};
exports.router = function (event, context) {
	'use strict';
	console.log(event);
	context.succeed('hello world');
};
