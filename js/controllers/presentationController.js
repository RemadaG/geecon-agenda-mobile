geeconControllers.controller('presentationController', ['$scope', '$http', '$state', '$stateParams',
    function ($scope, $http, $state, $stateParams) {
        $scope.presentation = [];

        var presentationId = $stateParams.presentationId;

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/1/presentations/' + presentationId).
                success(function (result) {
                    console.log(result);
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get speaker list!")
                });

        }

        onInit();
    }
]);
