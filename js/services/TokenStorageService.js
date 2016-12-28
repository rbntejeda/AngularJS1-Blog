'use strict';

appBlog.factory('tokenStorageService',['$window', function($window){

	return {
		save : function(token) {
			sessionStorage.setItem("access_token", token);
		},
		get : function() {
			var token = sessionStorage.getItem("access_token");
			if (token === undefined) {
				$window.location.href = '/login/index.html';
			}
			return token;
		},
		remove : function() {
            if (sessionStorage.access_token !== undefined) {
                sessionStorage.removeItem('access_token');
            }			
		},
		exist : function() {
			var token = sessionStorage.getItem("access_token");
			return (token === undefined)?false:true;
		}
	};
}])