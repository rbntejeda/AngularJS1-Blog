'use strict';

appBlog.factory('webApiConfig', function(){

	var apiHost = 'https://jsonplaceholder.typicode.com/';
	var apiEndPoint = '';

	return {
		getApiUrl : function() {
			return apiHost + apiEndPoint;
		}
	};
})