

angular.module('bizcontroller')
	.controller('dashboardController', function($scope, uiConfig, commonService, $location, $rootScope , $interval) {
		
		$scope.getView = function(view) {
			
			if(view == 'postshow'){
				$location.path("/postshow");
			}

			

		}


	});