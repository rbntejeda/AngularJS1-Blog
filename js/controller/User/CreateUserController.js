'use strict';
appBlog.controller('CreateUserController', function( $scope, userResource, $route, $location){
	$scope.user;

	$scope.save = function(){
		userResource.save($scope.user).
			then(function(response){
				$location.path('/User/List');
			}).
			catch(function(response){

			})
	};
});