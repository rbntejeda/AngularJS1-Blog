'use strict';
appBlog.controller('ListPostController', function($scope, userResource, $route){
	var posts = $route.current.locals.posts.data;
	var users = $route.current.locals.users.data;

	_.each(posts, function(post, index){
		var user = _.findWhere(users, { "id" : post.userId });
		post.username = user.username;
	});
	
	$scope.posts = posts;
});