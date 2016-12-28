'use strict';
appBlog.controller('ListPhotosController', ['$scope', 'photoResource', '$route', function($scope, photoResource, $route){
		// $scope.models = $route.current.locals.models.data;
	var photos = $route.current.locals.photos.data;
	var albums = $route.current.locals.albums.data;

	_.each(photos, function(photo, index){
		var album = _.findWhere(albums, { "id" : photo.albumId });
		photo.title = album.title;
	});

	$scope.photos = photos;
}]);