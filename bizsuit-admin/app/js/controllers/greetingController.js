
angular.module('holiday')
	.controller('greetingController', function($scope, uiConfig) {

		$scope.gLimit = uiConfig.greetingLimit;
		//based on time of day, figure out Good morning / afteroon / evening.

		$scope.greeting = 'Good Morning Nous! Good Morning Nous!Good Morning Nous!Good Morning Nous!Good Morning Nous!Good Morning Nous!';
	})
