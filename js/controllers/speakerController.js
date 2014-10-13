geeconControllers.controller('speakerController', ['$scope', '$http', '$state', '$stateParams', '$sce',
    function ($scope, $http, $state, $stateParams, $sce) {
        $scope.speaker = [];

        var speakerId = $stateParams.speakerId;

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/1/speakers/' + speakerId).
                success(function (result) {
                    $scope.speaker = {
                        name: result.name,
                        bio: $sce.trustAsHtml(result.bio),
                        photoUrl: result.photo,
                        presentations: result.presentations
                    }
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get speaker!")
                });
        }

        onInit();
    }
]);
