'use strict';
appBlog.controller('ListCommentsController',['$scope', 'commentResource', '$route', function($scope, commentResource, $route){
		// $scope.models = $route.current.locals.models.data;
	var comments = $route.current.locals.comments.data;
	var posts = $route.current.locals.posts.data;

	_.each(comments, function(comment, index){
		var post = _.findWhere(posts, { "id" : comment.postId });
		comment.title = post.title;
	});
	
	$scope.comments = comments;
}]);