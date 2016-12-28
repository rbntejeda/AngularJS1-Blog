'use strict';
appBlog.controller('CreatePostController',[ '$scope', 'postResource', '$route', '$location', function( $scope, postResource, $route, $location){
	$scope.users = $route.current.locals.users.data;
	$scope.post = { };
		
	$scope.savePost = function() {
		postResource.save($scope.post)
			.then(function(response) {
				$location.path('/Post/List');
			})
			.catch(function(response) {

			})
	};
}]);