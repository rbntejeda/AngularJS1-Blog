'use strict';
appBlog.controller('HomeController', ['$scope', 'tokenStorageService', '$window' , '$uibModal' , 'toastr', function($scope, tokenStorageService, $window,$uibModal,toastr){
	$scope.menu={

	}

	$scope.logout = function() {
		tokenStorageService.remove();
		toastr.warning('Token Borrado', 'Warning');
		// $window.location.href = "login/";
	}
	$scope.reLogin = function(/*primaryKey*/) {
		var modalInstance = $uibModal.open({
			templateUrl: 'templates/login/modal.html',
			controller: 'loginModalController',
			scope : $scope,
			// size : 'sm',
			// resolve: {
			// 	list: function (postResource) {
			// 		return postResource.getComments(primaryKey);
			// 	}
			// }
		});			
	};
	$scope.$on('$routeChangeError', function() {
		toastr.error('Tus credenciales han expirado', 'Error');
		$scope.reLogin();
		// tokenStorageService.remove();
		// $window.location.href = "login/";		
	})
}]).controller('loginModalController',[ '$scope', '$uibModalInstance','tokenStorageService','loginResource','toastr', function($scope, $uibModalInstance,tokenStorageService,loginResource,toastr){
	// $scope.list 
	$scope.auth = {};
	$scope.performAuthentication = function() {
		loginResource.doAuth($scope.auth.username, $scope.auth.password)
			.then(function(response) {
				tokenStorageService.save(response.data.access_token);
				$uibModalInstance.dismiss('cancel');
			})
			.catch(function(response) {
				console.log('Usuario Invalido');
				toastr.error('Ingrese nuevamente su usuario', 'Credenciales Invalidas');
			})
	}
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};	
}]);