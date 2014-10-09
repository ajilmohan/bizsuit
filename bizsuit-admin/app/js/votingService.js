angular.module('hotels')
	.provider('votingService', function() {

		var increment = 2;

		this.setIncrement = function(value) {
			increment = value;
		}

		this.$get = function() {
			return {
				upVote: function(hotel) {
					if (!hotel.rating) {
						hotel.rating = 0;
					}

					hotel.rating = hotel.rating + increment;
				},
				downVote: function(hotel) {
					if (!hotel.rating) {
						hotel.rating = 0;
					}


					hotel.rating--;
				}
			}
		}

	});