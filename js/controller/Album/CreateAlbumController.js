'use strict';
appBlog.controller('CreateAlbumController', function($scope, albumResource, $route, $location){
	$scope.users = $route.current.locals.users.data;
	$scope.album = { };

	$scope.saveAlbum = function() {
		albumResource.save($scope.album)
			.then(function(response) {
				$location.path('/Albums/List');
			})
			.catch(function(response) {
				console.log(response);
			})
	};
});