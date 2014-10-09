angular.module('hotels')
.factory('votingProvider', function(){

	

	return {
		upVote : function(hotel){
			if (!hotel.rating) {
				hotel.rating = 0;
			}

			return hotel.rating++;
		},

		downVote : function(hotel){
			if (!hotel.rating) {
				hotel.rating = 0;
			}


			return hotel.rating--;
		}
	}


})