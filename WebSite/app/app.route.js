angular.module('appRouteModule', ['ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'app/pages/message.html',
            controller: 'appController'
        })

        .when('/other', {
            templateUrl: 'app/pages/other.html',
            controller: 'appController'
        })
});