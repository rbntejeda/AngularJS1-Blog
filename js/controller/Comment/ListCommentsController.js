'use strict';
appBlog.controller('ListCommentsController', function($scope, commentResource, $route){
		$scope.models = $route.current.locals.models.data;
});