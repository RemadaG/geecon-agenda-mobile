geeconControllers.controller('presentationListController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.presentations = [];

        function onInit() {
            console.log("TODO: get presentations")
        }

        onInit();
    }
]);
