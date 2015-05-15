(function(){
          var empControllers = angular.module('empControllers', ['ngAnimate']);

          empControllers.controller('ListController', function($scope, $http) {
                    $http.get("app/employee/emp.data.json").success(function(data) {
                              $scope.employees = data;
                              $scope.empOrder = 'name';
                    });
          });

          empControllers.controller('DetailsController', function($scope, $http, $routeParams) {
                    $http.get("app/employee/emp.data.json").success(function(data) {
                              $scope.employees = data;
                              $scope.whichItem = $routeParams.empId;

                              if($routeParams.empId > 0) {
                                        $scope.prevItem = Number($routeParams.empId)-1;
                              }
                              else {
                                        $scope.prevItem = $scope.employees.length-1;
                              }

                              if($routeParams.empId < $scope.employees.length-1) {
                                        $scope.nextItem = Number($routeParams.empId)+1;
                              }
                              else {
                                        $scope.nextItem = 0;
                              }
                    });
          });
})();