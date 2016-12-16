'use strict';

appBlog.factory('albumResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();

	return {
		getAll : function() {
			return $http.get(apiHost + 'albums');
		}
	};
})