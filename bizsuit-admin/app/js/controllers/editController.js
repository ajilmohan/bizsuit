

angular.module('filimdetail')
	.controller('editController', function($scope, filimDb, $location) {
		
		 	
		   		var filimOuterRow  = [];
		  		filimDb.getFilims(function(filims){
					
					$scope.allFilims = filims;
					
					var totalFilims  = filims.length;
					
					var memberIndex = 0;
					 for (var i = 0; i < totalFilims; i++) {
					 	var childRow = [];
					 	for (var j = 0; j < 4 ; j++) {
					 		childRow[j] = filims[memberIndex];
					 		memberIndex++;
					 	}
					 	filimOuterRow[i] = childRow;
					 }
					$scope.filimOuterRow = filimOuterRow;
				});

		  		

		 


	});