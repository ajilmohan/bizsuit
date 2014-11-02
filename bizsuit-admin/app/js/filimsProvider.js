angular.module('filimdetail')
	.factory('filimDb', function($http) {

		var config = {
					/*headers: {
						'X-Parse-Application-Id': 'WiVHbxOmum94S0EiLQ6WTZH3LIxUAEzeU9fhEbxV',
						'X-Parse-REST-API-Key': 'OaFoJjSaTBun4N6zkBet2xizONcGfxB5uLj8UF6z',
					}*/
					//of bizsuit
					headers: {
						'X-Parse-Application-Id': 'bNtp8FUfr0s1UsAwJr7MFjabCI31HytIuC3gCaJ2',
						'X-Parse-REST-API-Key': 'g18cAoH7QkrBZenPqH0pynMKsn6pj4MyfDyIy6X1',
					}
				};

		return {
			getFilims: function(callback) {
				

				var resp = $http.get('https://api.parse.com/1/classes/filim/', config).success(function(data) {
					
					callback(data.results);
				});
			},
			addFilim: function(filim) {
				

				$http.post('https://api.parse.com/1/classes/filim', filim, config);
			},
			updateFilim : function(filim){
				debugger;
				$http.put('https://api.parse.com/1/classes/filim/' + filim.objectId, filim, config);
			}
		}
	})