geeconControllers.controller('mainController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.onShowAgenda = function () {
         $state.go('agenda-day-1');
        };

        $scope.onShowSpeakers = function () {
            $state.go('speakerList');
        };

        $scope.onShowPresentations = function () {
            $state.go('presentationList');
        };
    }
]);
