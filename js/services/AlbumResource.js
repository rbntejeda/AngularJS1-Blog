'use strict';

appBlog.factory('albumResource', ['$http', 'webApiConfig', 'tokenStorageService', function($http, webApiConfig, tokenStorageService){

	var apiHost = webApiConfig.getApiUrl();
	var base='albums';

	return {
		getAll : function() {
			var token = tokenStorageService.get();
			return $http.get(apiHost + base, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		save : function(model) {
			var token = tokenStorageService.get();
			return $http.post(apiHost + base, model, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		getPhotos : function(primaryKey) {
			var token = tokenStorageService.get();
			return $http.get(apiHost + base + '/' + primaryKey + '/photos', { "headers" : { "Authorization" : "Bearer " + token } });
		}
	};
}])