'use strict';

appBlog.factory('photoResource', function($http, webApiConfig){
	
	var apiHost = webApiConfig.getApiUrl();
	var base='photos';

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