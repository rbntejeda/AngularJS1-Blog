'use strict';

appBlog.factory('webApiConfig', [function(){

	var apiHost = 'http://localhost/rest/web/';
	var tokenEndPoint = 'oauth2/token';
	var apiEndPoint = 'v1/';

	return {
		getApiUrl : function() {
			return apiHost + apiEndPoint;
		},
		getTokenEndPoint : function() {
			return apiHost + tokenEndPoint;
		}
	};
}])