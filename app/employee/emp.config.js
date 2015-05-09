(function(){
	var app = angular.module('employee', ['ui.router']);

	app.config(function($stateProvider){
		$stateProvider.
			state('employee', {
				abstract: true,
				templateUrl: "app/employee/empbase.tpl.html"			
			}).
			state('employee.list', {
				url: "/employee/list",
				templateUrl: "app/employee/emp.tpl.html",
				controller: "EmpController"
			})
			
	});
})();