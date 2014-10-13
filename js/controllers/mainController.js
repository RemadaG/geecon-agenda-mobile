geeconControllers.controller('mainController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.onShowAgenda = function () {
         $state.go('agenda-day-1');
        };

        $scope.onShowSpeakers = function () {
            console.log('speakers!');
        };
    }
]);
