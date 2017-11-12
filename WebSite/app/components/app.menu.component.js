angular.module('appMenuComponentModule', [])
    .component('appMenu', {
        templateUrl: 'app/pages/menu.html',
        controller: function ($http) {
            var vm = this;         

            $http.get('http://localhost:53299/api/apps')
                .then(function (response) {
                    setItems(response.data)
                })

            function setItems(items) {
                vm.items = items
            }
        }
    });