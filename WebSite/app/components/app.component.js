angular.module('appComponentModule', [])
    .component('appComponent', {
        template: '{{ message }}',
        controller: function ($scope) {
            $scope.message = "fasfsaf"
        }
    });