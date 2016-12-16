'use strict';
// define el primeraApp modulo
var appBlog = angular.module('appBlog', ['ngRoute'])
	.config(function($routeProvider) {

		// User
		$routeProvider
		.when('/User/Create', {
			templateUrl : 'templates/user/form.html',
			controller : 'CreateUserController'
		})
		.when('/User/List', {
			templateUrl : 'templates/user/list.html',
			controller : 'ListUsersController',
			resolve: {
				users : function(userResource) {
					return userResource.getAll();
				}
			}
		})		
		//Comment
		.when('/Comment/Create', {
			templateUrl : 'templates/comments/form.html',
			controller : 'CreateCommentController'
		})
		.when('/Comment/List', {
			templateUrl : 'templates/comments/list.html',
			controller : 'ListCommentsController',
			resolve: {
				models : function(commentResource) {
					return commentResource.getAll();
				}
			}
		})
		//Post
		.when('/Post/Create', {
			templateUrl : 'templates/post/form.html',
			controller : 'CreatePostController'
		})
		.when('/Post/List', {
			templateUrl : 'templates/post/list.html',
			controller : 'ListPostController',
			resolve: {
				models : function(postResource) {
					return postResource.getAll();
				}
			}
		})
		//Albums
		.when('/Albums/Create', {
			templateUrl : 'templates/albums/form.html',
			controller : 'CreateAlbumController'
		})
		.when('/Albums/List', {
			templateUrl : 'templates/albums/list.html',
			controller : 'ListAlbumsController',
			resolve: {
				models : function(albumResource) {
					return albumResource.getAll();
				}
			}
		})
		//Albums
		.when('/Photos/Create', {
			templateUrl : 'templates/photos/form.html',
			controller : 'CreateAlbumController'
		})
		.when('/Photos/List', {
			templateUrl : 'templates/photos/list.html',
			controller : 'ListAlbumsController',
			resolve: {
				models : function(photoResource) {
					return photoResource.getAll();
				}
			}
		})
	    .otherwise({
        	template : "La pagina no existe"
   		});
	});