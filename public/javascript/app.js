// angular.module("app", []).controller("CarController", function($scope){
// 	// $scope.hello = "hello world";
// 	// ^^ declares a new variable "hello", but putting it on the bling scopes
// }); 
// // ^^ this creates a module -- group of self sustained code

angular.module("app", []).controller("CarController", function($scope){
	$scope.cars = [];
	$scope.car = {};
	$scope.createCar = function(){
		//$scope.model; don't have to write it, it's just done
		//angular does this for you ^^
		$scope.cars.push($scope.car);
		$scope.car = "";
	};	

	$scope.editCar = function(car){
		$scope.isEditing = true;
		$scope.car = angular.copy(car);
		$scope.selectedCar = car;

	};

	$scope.saveEdit = function(){
		$scope.isEditing = false;
		$scope.cars[$scope.cars.indexOf($scope.selectedCar)] = $scope.car;
		$scope.car = {};
	};

	$scope.cancelEdit = function(){
		$scope.isEditing = false;
		scope.car = {};
	};
});