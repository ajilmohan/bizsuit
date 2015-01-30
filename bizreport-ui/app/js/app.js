angular.module('bizreport', ['bizcontroller', 'bizservice' , 'ngRoute' , 'ui.bootstrap','ng-bs3-datepicker']);


angular.module('bizreport').config(function( $routeProvider) {

	

	$routeProvider.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})

	$routeProvider.when('/postshow', {
		templateUrl: 'partials/postshow.html'
	})
	


	$routeProvider.otherwise({
		templateUrl: 'partials/login.html'
	})

	
})
/*.run(function ($rootScope){
	$rootScope.endPoint = 'http://localhost:8080'
});*/

