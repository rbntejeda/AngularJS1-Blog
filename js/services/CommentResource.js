'use strict';

appBlog.factory('commentResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();

	return {
		getAll : function() {
			return $http.get(apiHost + 'comments');
		}
	};
})