(function(){
	var app = angular.module('employee', ['ui.router']);

	app.config(function($stateProvider){
		$stateProvider.
			state('employee', {
				abstract: false,
				templateUrl: "app/employee/emp.tpl.html",
				controller: "EmpController"
			})
			console.log("Routes Configured!");
	});
})();