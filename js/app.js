'use strict';
// define el primeraApp modulo
var appBlog = angular.module('appBlog', ['ui.bootstrap','ngRoute','ngAnimate'])
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
			controller : 'CreateCommentController',
			resolve: {
				posts : function(postResource) {
					return postResource.getAll();
				}
			}
		})
		.when('/Comment/List', {
			templateUrl : 'templates/comments/list.html',
			controller : 'ListCommentsController',
			resolve: {
				comments : function(commentResource) {
					return commentResource.getAll();
				},
				posts : function(postResource) {
					return postResource.getAll();
				}
			}
		})
		//Post
		.when('/Post/Create', {
			templateUrl : 'templates/post/form.html',
			controller : 'CreatePostController',
			resolve: {
				users : function(userResource) {
					return userResource.getAll();
				}				
			}

		})
		.when('/Post/List', {
			templateUrl : 'templates/post/list.html',
			controller : 'ListPostController',
			resolve: {
				posts : function(postResource) {
					return postResource.getAll();
				},
				users : function(userResource) {
					return userResource.getAll();
				}
			}
		})
		//Albums
		.when('/Albums/Create', {
			templateUrl : 'templates/albums/form.html',
			controller : 'CreateAlbumController',
			resolve: {
				users : function(userResource) {
					return userResource.getAll();
				}				
			}
		})
		.when('/Albums/List', {
			templateUrl : 'templates/albums/list.html',
			controller : 'ListAlbumsController',
			resolve: {
				albums : function(albumResource) {
					return albumResource.getAll();
				},
				users : function(userResource) {
					return userResource.getAll();
				}
			}
		})
		//Photos
		.when('/Photos/Create', {
			templateUrl : 'templates/photos/form.html',
			controller : 'CreatePhotoController',			
			resolve: {
				albums : function(albumResource) {
					return albumResource.getAll();
				}
			}
		})
		.when('/Photos/List', {
			templateUrl : 'templates/photos/list.html',
			controller : 'ListPhotosController',
			resolve: {
				photos : function(photoResource) {
					return photoResource.getAll();
				},
				albums : function(albumResource) {
					return albumResource.getAll();
				}
			}
		})
	    .otherwise({
        	template : "La pagina no existe :("
   		});
	});