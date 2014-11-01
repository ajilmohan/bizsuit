

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
  		$scope.editedIndex ;
  		$scope.showBtn = true;
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
		 		
		 		 $scope.filim.shows.splice(index, 1);
		 	}

		 	$scope.editShow = function(index){
		 		
		 		$scope.show  = angular.copy($scope.filim.shows[index]);
		 		$scope.editedIndex = index;
		 		$scope.showBtn = false;
		 		console.log($scope.show);
		 	}

		 	$scope.updateShow = function(show){
		 		
		 		$scope.filim.shows[$scope.editedIndex] = show;
		 		$scope.showBtn = true;
		 		$scope.show = {};
		 		$scope.show.time = new Date();
		 	}

		 	$scope.addShow = function(show){
		 		
		 		var newShow  = angular.copy(show);
				$scope.filim.shows.push(show);
				$scope.show = {};
		 		$scope.show.time = new Date();
		 	}

	});