angular.module('filims', [])


angular.module('filims', [])
	.value('uiConfig', {
		descLimit: 200,
		greetingLimit: 20
	});


angular.module('filims')
	.controller('filimsController', function($scope, uiConfig, filimDb,  $location, $rootScope , $interval) {

		
		$scope.imageSlideInterval = 3000;
		filimDb.getFilims(function(filims){
			
			$scope.filims = filims;
				var index = 0;
			 	var reset  = false;
				 $scope.filimToDisplay = $scope.filims[0];
			    $interval(function(){

					 $scope.filimToDisplay = $scope.filims[index];
					
					if (index == $scope.filims.length - 1 ) {

						$scope.filimToDisplay = $scope.filims[index];
						index = 0;
						reset  = true;
					};
					if(!reset){
						index++;
					}

					if (reset) {
						reset = false;
					};
					
				},7000);

			 
			
		});





	});