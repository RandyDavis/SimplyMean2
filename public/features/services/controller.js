/** Created by randy on 7/10/16. */
angular.module('app', [])
    .controller('ServicesCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('Hello from ServicesCtrl');
        $scope.message = "Hello from controller!";



        $scope.renderServiceClients = function (response) {
            $scope.serviceClients = response;
        }

        // get all
        $http.get("/serviceClients")
            .success($scope.renderServiceClients);
    }]);
