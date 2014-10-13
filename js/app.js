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
        .state('agenda-day-2', {
            url: "/agenda-day-2",
            templateUrl: "views/agenda-day-2.html",
            controller: "agendaController"
        })
        .state('speakerList', {
            url: "/speakers",
            templateUrl: "views/speakerList.html",
            controller: "speakerListController"
        })
        .state('speaker/{speakerId}', {
            url: "/speaker/{speakerId}",
            templateUrl: "views/speaker.html",
            controller: "speakerController"
        })
        .state('presentationList', {
            url: "/presentations",
            templateUrl: "views/presentationList.html",
            controller: "presentationListController"
        })
        .state('presentation/{presentationId}', {
            url: "/presentation/{presentationId}",
            templateUrl: "views/presentation.html",
            controller: "presentationController"
        });
});