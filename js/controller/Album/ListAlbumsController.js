'use strict';
appBlog.controller('ListAlbumsController', function($scope, albumResource, $route){
		$scope.models = $route.current.locals.models.data;
});