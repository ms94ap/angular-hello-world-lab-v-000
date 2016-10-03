function MainController($scope){
	$scope.name = "Andrew"
	$scope.phone = "0123456789"
	$scoper.email = 'email'

}

angular
	.module('app')
	.controller('MainController', MainController)