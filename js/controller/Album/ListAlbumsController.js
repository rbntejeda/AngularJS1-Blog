'use strict';
appBlog.controller('ListAlbumsController', function($scope, albumResource, $route){
	// $scope.models = $route.current.locals.models.data;
	var albums = $route.current.locals.albums.data;
	var users = $route.current.locals.users.data;

	_.each(albums, function(album, index){
		var user = _.findWhere(users, { "id" : album.userId });
		album.username = user.username;
	});
	
	$scope.albums = albums;
});