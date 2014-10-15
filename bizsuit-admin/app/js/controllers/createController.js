
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
		$scope.show = {};
		$scope.show.time = new Date();
		$scope.ismeridian = true;
		$scope.hstep = 1;
  		$scope.mstep = 15;
  		$scope.statusval = ['Available' , 'Sold Out' , 'Fast Filling'];
  		$scope.screens = ['SC-1' , 'SC-2' , 'SC-3' , 'SC-4' , 'SC-5'];
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

		 $scope.changed = function () {
		    //console.log('Time changed to: ' + $scope.show.time);
		 };


		  $scope.getFilims= function () {
		   
		  		filimDb.getFilims(function(filims){
			
					$scope.allFilims = filims;
					
					var totalFilims  = filims.length;
					var filimOuterRow  = [];
					var memberIndex = 0;
					 for (var i = 0; i < totalFilims; i++) {
					 	var childRow = [];
					 	for (var j = 0; j < 4 ; j++) {
					 		childRow[j] = filims[memberIndex];
					 		memberIndex++;
					 	}
					 	filimOuterRow[i] = childRow;
					 }
					
				});

		  		$scope.filimOuterRow;

		 };


	});