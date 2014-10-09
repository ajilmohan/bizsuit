

angular.module('hotels')
	.controller('detailsController', function($scope, hotelsDb, $routeParams) {

		console.log($routeParams.xxx);

		var hotel = hotelsDb.selectedHotel;

		if ( !hotel){
			var id = $routeParams.hotelId;

			hotelsDb.getHotel(function(data){
				$scope.hotel = data;
			}, id);
		}else
		{
			$scope.hotel = hotel;
		}



	});