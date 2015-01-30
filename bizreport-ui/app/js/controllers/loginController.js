angular.module('bizcontroller', ['bizservice'])


angular.module('bizcontroller', ['bizservice'])
	.value('uiConfig', {
		descLimit: 200,
		greetingLimit: 20
	});


angular.module('bizcontroller')
	.controller('loginController', function($scope, uiConfig, loginService, commonService , $location, $rootScope , $interval) {

		
		
		//$scope.cinemas = ["JRH Knm" , "JRK Wda" , "JRH Kty" , "JRH Gvr" , "JRH Tcr"]

		$scope.user = {};


		loginService.checkSession(function(userData){
			
			$scope.user = userData;

			if(userData != ""){
				$location.path("/dashboard");
			}
		});
		

		loginService.getCinemas(function(cinemas){
			
			$scope.cinemas = cinemas;

		});

		$scope.doLogin = function(user) {
			
			console.log("Name : "+user.name);
			console.log("Pwd : "+user.password);

			loginService.doLogin(function(user){
			
				$scope.user = user;
			},user);
			
			commonService.setCinema(user.cinema);

			$location.path("/dashboard");

		}


	});