'use strict';
appBlog.controller('CreatePhotoController',['$scope', 'photoResource', '$route', '$location', function($scope, photoResource, $route, $location){
		// $scope.users = $route.current.locals.users;
		// console.log($route.current.locals.users);
	$scope.albums = $route.current.locals.albums.data;
	$scope.photo = {};
	$scope.save = function(){
		photoResource.save($scope.photo)
			.then(function(response){
				$location.path('/Photos/List');
			})
			.catch(function(response){
			})
	};
}]);