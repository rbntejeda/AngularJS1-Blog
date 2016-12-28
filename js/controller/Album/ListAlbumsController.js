'use strict';
appBlog.controller('ListAlbumsController', ['$scope', 'albumResource', '$route', '$uibModal', function($scope, albumResource, $route, $uibModal){
	// $scope.models = $route.current.locals.models.data;
	var albums = $route.current.locals.albums.data;
	var users = $route.current.locals.users.data;

	_.each(albums, function(album, index){
		var user = _.findWhere(users, { "id" : album.userId });
		album.username = user.username;
	});
	
	$scope.albums = albums;

	$scope.show = function(primaryKey) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/photos/modal.html',
			controller: 'modalController',
			scope : $scope,
			size : 'lg',
			resolve: {
				list: ['albumResource',function (albumResource) {
					return albumResource.getPhotos(primaryKey);
				}]
			}
		});			
	};
}]);