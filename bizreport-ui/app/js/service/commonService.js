


angular.module('bizservice')
	.factory('commonService', function($http) {

		var selCinema = {};

		return {
			

			getCinema: function() {
				
				return selCinema;
				
			},
			setCinema: function(cinema) {
				
				selCinema = cinema;
			}

		}
	});








