'use strict';
appBlog
.controller('LoginController', ['$scope', 'loginResource', '$route', 'tokenStorageService', '$window', function($scope, loginResource, $route, tokenStorageService, $window){
	$scope.auth = {};

	$scope.performAuthentication = function() {
		loginResource.doAuth($scope.auth.username, $scope.auth.password)
			.then(function(response) {
				tokenStorageService.save(response.data.access_token);
				$window.location.href = "../#/Post/List";
			})
			.catch(function(response) {

			})
	}
}]);