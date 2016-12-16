// define el primeraApp modulo
var appBlog = angular.module('appBlog', ['ngRoute'])
	.config(function($routeProvider) {

		// User
		$routeProvider
		.when('/User/List', {
			templateUrl : 'templates/user/list.html',
			controller : 'ListUsersController'
		})
		.when('/User/Create', {
			templateUrl : 'templates/user/form.html',
			controller : 'ListUsersController'
		})
		//Post
		.when('/Post/Create', {
			templateUrl : 'templates/post/form.html',
			// controller : 'ListUsersController'
		})
		.when('/Post/List', {
			templateUrl : 'templates/post/list.html',
		})
		//Albums
		.when('/Albums/Create', {
			templateUrl : 'templates/albums/form.html',
		})
		.when('/Albums/List', {
			templateUrl : 'templates/albums/list.html',
		})
		//Photos
		.when('/Photos/Create', {
			templateUrl : 'templates/photos/form.html',
		})
		.when('/Photos/List', {
			templateUrl : 'templates/photos/list.html',
		})
	    .otherwise({
        	template : "La pagina no existe"
   		});
	});