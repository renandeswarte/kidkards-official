angular.module('myApp', ['ngRoute','myApp.homepage'])

// Default route redirection
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
