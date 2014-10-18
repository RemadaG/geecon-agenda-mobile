geeconControllers.controller('presentationListController', ['$scope', '$http', '$state', '$sce', '$localStorage',
    function ($scope, $http, $state, $sce, $localStorage) {
        $scope.presentations = [];
        $scope.searchText = "";
        $scope.orgPresentations = [];

        $scope.$storage = $localStorage;
        if ($scope.$storage.votedPresentations === undefined) {
            $scope.$storage.votedPresentations = [];
        }

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/presentations').
                success(function (result) {
                    $scope.orgPresentations = result;
                    preparePresentationList(result);
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get presentation!")
                });
        }

        function preparePresentationList(presentationListFromService) {
            $scope.presentations = [];
            for (var i in presentationListFromService) {
                var presentation = presentationListFromService[i];
                var presentationToAdd = {
                    id: presentation.id,
                    title: presentation.title,
                    summary: $sce.trustAsHtml(presentation.summary),
                    speakers: presentation.speakers
                };
                presentationToAdd.voted = isPresentationIsVoted(presentation.id);
                $scope.presentations.push(presentationToAdd);
            }
        }

        function isPresentationIsVoted(presentationId) {
            var isVoted = false;
            var votedPresentations = $scope.$storage.votedPresentations;
            for (var i = 0; i < votedPresentations.length; i++) {
                if (votedPresentations[i] == presentationId) {
                    isVoted = true;
                    break;
                }
            }
            return isVoted;
        }

        $scope.ratePresentation = function (rate, presentationId) {
            var addToArray = true;
            var votedPresentations = $scope.$storage.votedPresentations;
            for (var i = 0; i < votedPresentations.length; i++) {
                if (votedPresentations[i] == presentationId) {
                    addToArray = false;
                    break;
                }
            }
            if (addToArray) {
                votedPresentations.push(presentationId);
            }
            preparePresentationList($scope.orgPresentations);
        };


        onInit();
    }
]);
