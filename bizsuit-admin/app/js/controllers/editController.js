

angular.module('filimdetail')
	.controller('editController', function($scope, filimDb, $location , shareDataProvider ) {
		
		$scope.filim = shareDataProvider.getFilim();
		$scope.show = {};
		$scope.show.time = new Date();
		$scope.ismeridian = true;
		$scope.hstep = 1;
  		$scope.mstep = 15;
  		$scope.statusval = ['Available' , 'Sold Out' , 'Fast Filling'];
  		$scope.screens = ['SC-1' , 'SC-2' , 'SC-3' , 'SC-4' , 'SC-5'];
		$scope.updateFilim = function(filim) {
		 
			//$scope.filimToPersist = angular.copy(filim);

			if (this.filimsForm.$invalid) {
				alert('not properly filled');
			} else {

				filimDb.updateFilim(filim);
				$scope.filim = {};

				
			}
		}

		 	$scope.deleteShow = function(index) {
		 		debugger;
		 		 $scope.filim.shows.splice(index, 1);
		 	}

	});