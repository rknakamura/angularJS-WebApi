angular.module('appAddRemoveModule', [])
    .controller('appAddRemoveController', function ($http) {
        var vm = this

        vm.list = []
        vm.save = save
        vm.remove = remove

        active()

        function active() {
            $http.get('http://localhost:53299/api/apps')
                .then(function (result) {
                    vm.list  = result.data
                })
        }

        function save () {
            $http.post('http://localhost:53299/api/apps', this.input)
                .then(function (result) {
                    vm.input.Id = result.data
                    vm.list.push(vm.input)
                    vm.input = {}
                })
        }

        function remove (id) {
            $http.delete('http://localhost:53299/api/apps/' + id)
                .then(function () {
                    var listItem = vm.list.find(function (item) {
                        return item.Id === id
                    })

                    vm.list.splice(listItem, 1)
                })
        }
    });