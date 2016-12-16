

// define el primeraAppListController the myAppListController de myApp modulo
appBlog.controller('ListUsersController', function($scope, userResource){
		$scope.users = userResource.getAll();
});