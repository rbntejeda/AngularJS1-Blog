'use strict';
appBlog
.controller('ListUsersController', function($scope, userResource, $route, $uibModal){
	$scope.users = $route.current.locals.users.data;

	$scope.getPosts = function(userId) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/post/modal.html',
			controller: 'GetUserPostsController',
			scope : $scope,
			size : 'lg',
			resolve: {
				posts: function (userResource) {
					return userResource.getPosts(userId);
				}
			}
		});			
	};
	$scope.getAlbums = function(userId) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/albums/modal.html',
			controller: 'GetUserAlbumsController',
			scope : $scope,
			size : 'lg',
			resolve: {
				albums: function (userResource) {
					return userResource.getAlbums(userId);
				}
			}
		});			
	};
})
.controller('GetUserPostsController', function($scope, $uibModalInstance, posts){
	$scope.posts = posts.data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
})
.controller('GetUserAlbumsController', function($scope, $uibModalInstance, albums){
	$scope.albums = albums.data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});