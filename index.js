var app = angular.module('weatherApp', ['ui.bootstrap']);

app.controller('weatherCtrl', function ($scope, $http) {

    $scope.maxSize = 5;    
    $scope.totalCount = 0; 
    $scope.pageIndex = 1;  
    $scope.pageSizeSelected = 5; 

    $scope.getWeatherList = function () {
        $http.get("localhost:8080/data?type=temperature&sensorId=100&dateTimeFrom=02/02/2019 01:01:01&dateTimeTo=03/03/2019 01:01:01" + $scope.pageIndex + "&pageSize=" + $scope.pageSizeSelected).then(
                       function (response) {
                           $scope.employees = response.data.employees;
                           $scope.totalCount = response.data.totalCount;
                       },
                       function (err) {
                           var error = err;
                       });
    }

    
    $scope.getWeatherList();

    
    $scope.pageChanged = function () {
        $scope.getEmployeeList();
    };

    
    $scope.changePageSize = function () {
        $scope.pageIndex = 1;
        $scope.getEmployeeList();
    };

});
