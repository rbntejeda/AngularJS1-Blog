'use strict';

appBlog.factory('postResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();

	return {
		getAll : function() {
			return $http.get(apiHost + 'posts');
		}
	};
})