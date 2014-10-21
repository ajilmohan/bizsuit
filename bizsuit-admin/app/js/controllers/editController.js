

angular.module('filimdetail')
	.controller('editController', function($scope, filimDb, $location , shareDataProvider ) {
		debugger;
		 	$scope.filim = shareDataProvider.getFilim();

	});