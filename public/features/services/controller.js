/** Created by randy on 7/10/16. */
angular.module('app', [])
    .controller('ServicesCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log('Hello from ServicesCtrl');
        $scope.message = "Hello from controller!";

        $scope.create = function () {
            console.log($scope.serviceClient);
            $http.post("/serviceClients", $scope.serviceClient)
            .success(function (response) {
                $scope.all();
            });
        };

        $scope.renderServiceClients = function (response) {
            $scope.serviceClients = response;
        };

        $scope.remove = function (id) {
            $http.delete("/serviceClients/" + id)
            .success(function (response) {
                $scope.all();
            });
        };
        
        $scope.update = function () {
            console.log($scope.serviceClient);
            $http.put("/serviceClients/" + $scope.serviceClient._id, $scope.serviceClient);
        };

        $scope.select = function (id) {
            console.log(id);
            $http.get("/serviceClients/" + id)
                .success(function (response) {
                    console.log(response);
                    $scope.serviceClient = response;
                })
        };

        // get all
        $scope.all = function () {

            $http.get("/serviceClients")
                .success($scope.renderServiceClients);
        }

        $scope.all();
    }]);

