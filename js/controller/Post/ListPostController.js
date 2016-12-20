'use strict';
appBlog.controller('ListPostController', function($scope, postResource, $route, $uibModal){
	var posts = $route.current.locals.posts.data;
	var users = $route.current.locals.users.data;

	_.each(posts, function(post, index){
		var user = _.findWhere(users, { "id" : post.userId });
		post.username = user.username;
	});
	$scope.posts = posts;

	$scope.showComment = function(primaryKey) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/comments/modal.html',
			controller: 'modalController',
			scope : $scope,
			size : 'lg',
			resolve: {
				list: function (postResource) {
					return postResource.getComments(primaryKey);
				}
			}
		});			
	};
})
.controller('modalController',function($scope, $uibModalInstance, list){
	$scope.list = list.data;
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};	
});