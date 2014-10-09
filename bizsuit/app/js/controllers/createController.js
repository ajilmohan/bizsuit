angular.module('hotels')
	.controller('createController', function($scope, hotelsDb, $location) {

		$scope.availableImages = ['OqJMuy5.jpg', 'qA4PCDl.jpg', 'kVIGWsz.jpg'];

		$scope.hotel = {
			price : 5000,
			amenities : [{
				name : 'Swimming Pool',
				available : true
			}]
		}		

		$scope.step = 1;

		

		$scope.addHotel = function(hotel) {
			var newHotel = angular.copy(hotel);

			if (this.hotelsForm.$invalid) {
				alert('not properly filled');
			} else {

				hotelsDb.addHotel(newHotel)
				$scope.hotel = {};

				$location.url('/listing');
			}
		}

	})