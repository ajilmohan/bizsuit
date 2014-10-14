angular.module('filims', [])


angular.module('filims', [])
	.value('uiConfig', {
		descLimit: 200,
		greetingLimit: 20
	});


angular.module('filims')
	.controller('filimsController', function($scope, uiConfig, filimDb,  $location, $rootScope , $interval) {

		

		filimDb.getFilims(function(filims){
			
			$scope.filims = filims;
			var index = 0;
			 	
			$scope.filimToDisplay = $scope.filims[0];
			recursiveCall(index);

			 
			
		});


		function recursiveCall(index){
			debugger;

			 $interval(function(){
					 $scope.filimToDisplay = $scope.filims[index];
					
					/*if (index  $scope.filims.length - 1 ) {
						debugger;
						//$scope.filimToDisplay = $scope.filims[index];
						index = 0;
					};*/
				},7000);
			 index++;

			 if(index == $scope.filims.length  ) {
			 	index = 0;
			 }
			 recursiveCall(index);

		}

		


	});