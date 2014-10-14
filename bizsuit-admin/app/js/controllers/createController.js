
angular.module('filimdetail', [])

angular.module('filimdetail')
	.controller('createController', function($scope, filimDb, $location) {
		$scope.imageSlideInterval = 3000;
  		$scope.imageUrlSlides = [];
		$scope.filim = {};
		var shows = [];
		$scope.filim.shows = shows;
		$scope.filim.images = [];
		$scope.filim.slides = [];

		$scope.addFilim = function(filim) {
		 
			//$scope.filimToPersist = angular.copy(filim);

			if (this.filimsForm.$invalid) {
				alert('not properly filled');
			} else {

				filimDb.addFilim(filim);
				$scope.filim = {};

				
			}
		}

		$scope.addShow = function(show){
			var newShow  = angular.copy(show);
			$scope.filim.shows.push(show);
			$scope.show = {};
		}

		$scope.addImageUrl = function(imgUrl){
			var newWidth = 600 + $scope.filim.slides.length;
			$scope.filim.images.push(imgUrl);
			var imageDet = {image: imgUrl +'/' +newWidth + '/300' ,
		      text: ''}
		    $scope.filim.slides.push(imageDet);
			var imageDet = {};	
			$scope.filim.imgUrl = "";
		}

	});