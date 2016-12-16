'use strict';
appBlog.controller('ListPhotosfController', function($scope, photoResource, $route){
		$scope.models = $route.current.locals.models.data;
});