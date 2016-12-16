'use strict';

appBlog.factory('userResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();

	return {
		getAll : function() {
			return $http.get(apiHost + 'users');
		}
	};
})