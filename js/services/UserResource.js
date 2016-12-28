'use strict';

appBlog.factory('userResource', ['$http', 'webApiConfig','tokenStorageService', function($http, webApiConfig,tokenStorageService){

	var apiHost = webApiConfig.getApiUrl();
	var base='users';

	return {
		getAll : function() {
			var token = tokenStorageService.get();
			return $http.get(apiHost + base, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		save : function(model) {
			var token = tokenStorageService.get();
			return $http.post(apiHost + base, model, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		getPosts : function(userId) {
			var token = tokenStorageService.get();
			return $http.get(apiHost + base + '/' + userId + '/posts', { "headers" : { "Authorization" : "Bearer " + token } });
		},
		getAlbums : function(userId) {
			var token = tokenStorageService.get();
			return $http.get(apiHost + base + '/' + userId + '/albums', { "headers" : { "Authorization" : "Bearer " + token } });
		}
	};
}])