


angular.module('bizservice')
	.factory('postShowService', function($http) {

		var config = {
					/*headers: {
						'X-Parse-Application-Id': 'WiVHbxOmum94S0EiLQ6WTZH3LIxUAEzeU9fhEbxV',
						'X-Parse-REST-API-Key': 'OaFoJjSaTBun4N6zkBet2xizONcGfxB5uLj8UF6z',
					}*/
					//of bizsuit
					/*headers: {
						'X-Parse-Application-Id': 'bNtp8FUfr0s1UsAwJr7MFjabCI31HytIuC3gCaJ2',
						'X-Parse-REST-API-Key': 'g18cAoH7QkrBZenPqH0pynMKsn6pj4MyfDyIy6X1',
					}*/
				};

		return {
			

			getShows : function(callback){
				
				var resp = $http.get('http://localhost:8080/bizreport-core/rest/cinemas/screen1/shows', config).success(function(data) {
					callback(data);
				});
			},

			getShow : function(callback){
				
				var resp = $http.get('http://localhost:8080/bizreport-core/rest/cinemas/screen1/9', config).success(function(data) {
					callback(data);
				});
			},

			doLogin : function(callback,user){


				$http.post('http://localhost:8080/bizreport-core/rest/cinemas/login', user, config).success(function(data) {
					callback(data);
				});
				
				
			}

		}
	});








