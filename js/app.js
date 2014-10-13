var geeconAgendaApp = angular.module("geeconAgendaApp", [
    'ngRoute',
    'ui.router',
    'geeconControllers'
]);

geeconAgendaApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller: "mainController"
        })
        .state('agenda-day-1', {
            url: "/agenda-day-1",
            templateUrl: "views/agenda-day-1.html",
            controller: "agendaController"
        })
        .state('speakers', {
            url: "/speakers",
            templateUrl: "views/speakerList.html",
            controller: "speakerListController"
        });
});