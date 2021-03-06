geeconControllers.controller('speakerListController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.speakers = [];
        $scope.searchText = "";

        function onInit() {
            $http.get('http://registration.geecon.cz/rest/speakers?details=true').
                success(function (result) {
                    for (var i in result) {
                        var speaker = result[i];
                        var speakerToAdd = {
                            name: speaker.name,
                            photoUrl: speaker.photo,
                            shortBio: speaker.shortBio,
                            presentations: speaker.presentations
                        };
                        $scope.speakers.push(speakerToAdd);
                    }
                }).
                error(function (data, status, headers, config) {
                    console.warn("Cannot get speaker list!")
                });
        }

        onInit();
    }
]);
