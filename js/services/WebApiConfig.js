'use strict';

appBlog.factory('webApiConfig', [function(){

	var apiHost = 'http://localhost/rest/web/';
	var tokenEndPoint = 'oauth2/token';
	var apiEndPoint = 'api/';

	return {
		getApiUrl : function() {
			return apiHost + apiEndPoint;
		},
		getTokenEndPoint : function() {
			return apiHost + tokenEndPoint;
		}
	};
}])