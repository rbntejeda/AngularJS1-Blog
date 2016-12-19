'use strict';

appBlog.factory('commentResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();
	var base='comments';

	return {
		getAll : function() {
			return $http.get(apiHost + base);
		},
		save : function(model) {
			console.log(model);
			return $http.post(apiHost + base, model);
		}
	};
})