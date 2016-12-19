'use strict';

appBlog.factory('postResource', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();
	var base='posts';

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