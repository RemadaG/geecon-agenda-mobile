geeconControllers.controller('presentationListController', ['$scope', '$http', '$state', '$sce',
    function ($scope, $http, $state, $sce) {
        $scope.presentations = [];
        $scope.searchText = "";

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/presentations').
                success(function (result) {
                    for (var i in result) {
                        var presentation = result[i];
                        var presentationToAdd = {
                            title: presentation.title,
                            summary: $sce.trustAsHtml(presentation.summary),
                            speakers: presentation.speakers
                        };
                        $scope.presentations.push(presentationToAdd);
                    }
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get presentation!")
                });

        }

        onInit();
    }
]);
