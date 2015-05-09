(function(){

	var app = angular.module('employee');

	app.controller('EmpController', function($scope, UsersService){

	    // $scope.emp_details = [
	    // 	{name: "Bhaumik Gandhi", age: "25"},
	    // 	{name: "Ishan Sheth", age: "27"}
	    // ];

	    $scope.emp_details = UsersService.add();

    	console.log($scope.emp_details);
	
	});

})();