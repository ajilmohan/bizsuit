

angular.module('filimdetail')
	.controller('listController', function($scope, filimDb, $location , shareDataProvider ) {
		
		 	var filimOuterRow  = [];
		  		var test = filimDb.getFilims(function(filims){
					
					$scope.allFilims = filims;
					
					var totalFilims  = filims.length;
					
					var memberIndex = 0;
					 for (var i = 0; i < totalFilims; i++) {
					 	var childRow = [];
					 	for (var j = 0; j < 4 ; j++) {
					 		childRow[j] = filims[memberIndex];
					 		if (totalFilims == memberIndex ) { 
					 			filimOuterRow[i] = childRow; 
					 			$scope.filimOuterRow = filimOuterRow;
					 			return;
					 		}
					 		memberIndex++;

					 	}
					 	filimOuterRow[i] = childRow; 
					 	
					 }
					
					$scope.filimOuterRow = filimOuterRow;
					
				});

		 	
		   	

	  		$scope.editDetNavigation = function(filim){
				
				shareDataProvider.setFilim(filim);

			}

	});