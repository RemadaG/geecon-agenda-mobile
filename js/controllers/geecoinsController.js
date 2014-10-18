geeconControllers.controller('geecoinsController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $scope.speakers = [];

        function onInit() {
            console.log("geecoins")
        }

        onInit();
    }
]);
