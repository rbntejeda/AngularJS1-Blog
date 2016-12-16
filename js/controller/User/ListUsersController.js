'use strict';
appBlog.controller('ListUsersController', function($scope, userResource, $route){
		$scope.users = $route.current.locals.users.data;
});