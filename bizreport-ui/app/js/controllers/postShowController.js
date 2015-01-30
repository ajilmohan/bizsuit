






angular.module('bizcontroller')
	.controller('postShowController', function($scope, uiConfig, commonService,  postShowService, $location, $rootScope , $interval) {
		
		$scope.showsToBePost = {};
		$scope.cinema = commonService.getCinema();
		$scope.screensToProces = $scope.cinema.screens;
		$scope.selectedScreen = {};
		$scope.filmsOnScreen = {};
		$scope.dateOptions = {
						        changeYear: true,
						        changeMonth: true,
						        yearRange: '1900:-0'
						    };

		$scope.getShows = function(screen) {
				
				postShowService.getShows(function(shows){
					$scope.shows = shows;
					$scope.filmsOnScreen  = screen.films;

				});
		}


		$scope.populatePostShowForm = function(show){
				/*postShowService.getShow(function(show){
					
					$scope.show = show;
					$scope.facilities = show.facilities;
				});*/
			$scope.facilities = show.facilities;
		}

		$scope.saveRecords = function(){

		}


	});