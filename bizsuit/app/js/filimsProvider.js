angular.module('filims')
	.factory('filimDb', function($http) {

		var config = {
					
					headers: {
						'X-Parse-Application-Id': 'bNtp8FUfr0s1UsAwJr7MFjabCI31HytIuC3gCaJ2',
						'X-Parse-REST-API-Key': 'g18cAoH7QkrBZenPqH0pynMKsn6pj4MyfDyIy6X1',
					}
				};

		return {
			getFilims: function(callback) {
				
				var whereQuery = {"status" : "CLOSED"};
				var url = 'https://api.parse.com/1/classes/filim?where=' + encodeURI(JSON.stringify(whereQuery));

				var resp = $http.get(url, config).success(function(data) {
					
				  callback(data.results);
				});
			}
		}
	})