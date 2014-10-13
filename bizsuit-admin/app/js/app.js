angular.module('filimexpo', ['filimdetail', 'ngRoute' , 'ui.bootstrap']);

angular.module('filimexpo').config(function( $routeProvider) {

	

	$routeProvider.when('/filimDetails', {
		templateUrl: 'partials/filimDetails.html'
	})
	

	$routeProvider.otherwise({
		redirectTo: '/filimDetails'
	})

	
})


