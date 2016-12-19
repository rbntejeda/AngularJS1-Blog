'use strict';

appBlog.factory('albumResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();
	var base='albums';

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