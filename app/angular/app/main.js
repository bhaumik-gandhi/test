(function(){
          var myApp = angular.module('myApp', [
                'ngRoute',
                'empControllers'
          ]);

          myApp.config(['$routeProvider', function($routeProvider) {
                    $routeProvider.
                    when('/emp', {
                              templateUrl: "app/employee/emp.tpl.html",
                              controller: "ListController"
                    }).
                    when('/details/:empId', {
                              templateUrl: "app/employee/emp.detail.tpl.html",
                              controller: "DetailsController"
                    }).
                    otherwise ({
                              redirectTo: "/emp"
                    });
          }]);
})();