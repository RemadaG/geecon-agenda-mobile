var geeconControllers = angular.module('geeconControllers', []);



geeconControllers.controller('agendaController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);

geeconControllers.controller('speakerListController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);