geeconControllers.controller('presentationController', ['$scope', '$http', '$state', '$stateParams', '$sce',
    function ($scope, $http, $state, $stateParams, $sce) {
        $scope.presentation = [];

        var presentationId = $stateParams.presentationId;

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/1/presentations/' + presentationId).
                success(function (result) {
                    console.log(result);
                    $scope.presentation = {
                        title: result.title,
                        summary: $sce.trustAsHtml(result.summary),
                        speakers: result.speakers
                    }
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get presentation!")
                });
        }

        onInit();
    }
]);
