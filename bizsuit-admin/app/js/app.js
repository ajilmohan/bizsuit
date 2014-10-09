angular.module('filimexpo', ['filimdetail', 'ngRoute']);

angular.module('filimexpo').config(function( $routeProvider) {

	

	$routeProvider.when('/filimDetails', {
		templateUrl: 'partials/filimDetails.html'
	})
	

	$routeProvider.otherwise({
		redirectTo: '/filimDetails'
	})

	
})


