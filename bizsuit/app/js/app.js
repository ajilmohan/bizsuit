angular.module('filimexpo', ['filims', 'ngRoute']);

angular.module('filimexpo').config(function( $routeProvider) {

	

	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html'
	})
	

	$routeProvider.otherwise({
		redirectTo: '/listing'
	})

	
})


