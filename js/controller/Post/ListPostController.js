'use strict';
appBlog.controller('ListPostController', function($scope, userResource, $route){
		$scope.models = $route.current.locals.models.data;
});