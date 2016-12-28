'use strict';

appBlog.factory('loginResource', ['$http', 'webApiConfig', function($http, webApiConfig){

	var apiHost = webApiConfig.getApiUrl();
	var path='posts';
	var tokenEndPoint = webApiConfig.getTokenEndPoint();

	return {
		doAuth : function(username, password) {
			
			return $http.post(tokenEndPoint, {
				"username" : username,
				"password" : password,
				"grant_type" : "password",
				"client_id" : "jsClient"
			}); 
		}
	};
}])