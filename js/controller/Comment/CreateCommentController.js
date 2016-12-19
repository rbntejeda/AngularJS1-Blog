'use strict';
appBlog.controller('CreateCommentController', function($scope, commentResource, $route, $location){
		// $scope.users = $route.current.locals.users;
		// console.log($route.current.locals.users);
		$scope.posts = $route.current.locals.posts.data;
		$scope.comment;

		$scope.save = function(){
			commentResource.save($scope.comment).
			then(function(response){
				$location.path('/Comment/List');
			})
			.catch(function(response){

			})
		};
});