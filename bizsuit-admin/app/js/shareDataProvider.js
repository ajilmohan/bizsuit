angular.module('filimdetail')
	.factory('shareDataProvider', function($http) {

		var filimDet = {};

		return {
			getFilim: function() {
				
				return filimDet;
				
			},
			setFilim: function(filim) {
				
				filimDet = filim;
			}
		}
	})