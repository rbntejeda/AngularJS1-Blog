'use strict';

appBlog.factory('postResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();

	return {
		getAll : function() {
			return $http.get(apiHost + 'posts');
		},
		save : function(post) {
			return $http.post(apiHost + 'users', post);
		}
	};
})