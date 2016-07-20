angular.module('habilelabsApp')
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('index', {
                url: '/',
                template: '<index></index>'
            })
            .state('parties', {
                url: '/',
                template: '<index></index>'
            })
            .state('parties.view', {
                url: '/add',
                template: '<index></index>'
            })
            .state('parties.add', {
                url: '/:id',
                template: '<index></index>'
            });
        $urlRouterProvider.otherwise("/");
    }]);