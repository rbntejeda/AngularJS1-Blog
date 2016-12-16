'use strict';

appBlog.factory('photoResource', function($http, webApiConfig){
	var apiHost = webApiConfig.getApiUrl();
	return {
		getAll : function() {
			return $http.get(apiHost + 'photos');
		}
	};
})