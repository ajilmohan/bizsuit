
angular.module('filimdetail', [])

angular.module('filimdetail')
	.controller('createController', function($scope, filimDb, $location) {

		$scope.addFilim = function(filim) {
		 debugger;
			var newfilim = angular.copy(filim);

			if (this.filimsForm.$invalid) {
				alert('not properly filled');
			} else {

				filimDb.addFilim(newfilim);
				$scope.filim = {};

				
			}
		}

	});