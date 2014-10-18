geeconControllers.controller('presentationController', ['$scope', '$http', '$state', '$stateParams', '$sce', '$localStorage',
    function ($scope, $http, $state, $stateParams, $sce, $localStorage) {
        $scope.presentation = [];

        var presentationId = $stateParams.presentationId;
        $scope.$storage = $localStorage;
        if ($scope.$storage.votedPresentations === undefined) {
            $scope.$storage.votedPresentations = [];
        }

        function checkIfPresentationIsVoted() {
            $scope.presentation.voted = false;
            var votedPresentations = $scope.$storage.votedPresentations;
            for (var i = 0; i < votedPresentations.length; i++) {
                if (votedPresentations[i] == presentationId) {
                    $scope.presentation.voted = true;
                    break;
                }
            }
        }

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/1/presentations/' + presentationId).
                success(function (result) {
                    $scope.presentation = {
                        id: result.id,
                        title: result.title,
                        summary: $sce.trustAsHtml(result.summary),
                        speakers: result.speakers
                    };
                    checkIfPresentationIsVoted();
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get presentation!")
                });
        }

        $scope.ratePresentation = function (rate, presentationId) {
            var addToArray = true;
            for (var i = 0; i < $scope.$storage.votedPresentations.length; i++) {
                if ($scope.$storage.votedPresentations[i] === presentationId) {
                    addToArray = false;
                    break;
                }
            }
            if (addToArray) {
                $scope.$storage.votedPresentations.push(presentationId);
            }
            $scope.presentation.voted = true;
        };

        onInit();
    }
]);
