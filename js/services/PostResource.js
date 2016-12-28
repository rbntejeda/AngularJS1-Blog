'use strict';

appBlog.factory('postResource', ['$http', 'webApiConfig','tokenStorageService', function($http, webApiConfig,tokenStorageService){

	var apiHost = webApiConfig.getApiUrl();
	var path='posts';

	return {
		getAll : function() {
			var token = tokenStorageService.get();
			return $http.get(apiHost + path, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		save : function(model) {
			var token = tokenStorageService.get();
			return $http.post(apiHost + path, model, { "headers" : { "Authorization" : "Bearer " + token } });
		},
		getComments : function(primaryKey) {
			var token = tokenStorageService.get();
			return $http.get(apiHost + path + '/' + primaryKey + '/comments', { "headers" : { "Authorization" : "Bearer " + token } });
		}
	};
}])