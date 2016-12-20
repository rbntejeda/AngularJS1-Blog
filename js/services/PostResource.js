'use strict';

appBlog.factory('postResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();
	var path='posts';

	return {
		getAll : function() {
			return $http.get(apiHost + path);
		},
		save : function(model) {
			return $http.post(apiHost + path, model);
		},
		getComments : function(primaryKey) {
			return $http.get(apiHost + path + '/' + primaryKey + '/comments');
		}
	};
})