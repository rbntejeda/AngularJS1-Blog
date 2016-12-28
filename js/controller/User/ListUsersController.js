'use strict';
appBlog
.controller('ListUsersController',['$scope', 'userResource', '$route', '$uibModal', function($scope, userResource, $route, $uibModal){
	$scope.users = $route.current.locals.users.data;

	$scope.getPosts = function(userId) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/post/modal.html',
			controller: 'GetUserPostsController',
			scope : $scope,
			size : 'lg',
			resolve: {
				posts: ['userResource', function (userResource) {
					return userResource.getPosts(userId);
				}]
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
				albums: ['userResource',function (userResource) {
					return userResource.getAlbums(userId);
				}]
			}
		});			
	};
}])
.controller('GetUserPostsController', ['$scope', '$uibModalInstance', 'posts' ,function($scope, $uibModalInstance, posts){
	$scope.posts = posts.data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}])
.controller('GetUserAlbumsController', ['$scope', '$uibModalInstance', 'albums', function($scope, $uibModalInstance, albums){
	$scope.albums = albums.data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);