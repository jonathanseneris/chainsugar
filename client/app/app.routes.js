(function(){

  angular.module('trApp')
    .config(function($routeProvider) {

      $routeProvider
        .when('/', {
            templateUrl: 'app/components/landing/landing.html',
            controller: 'LandingPageController',
            publicAccess: true
        })
        .when('/sign-in', {
            templateUrl: 'app/components/sign-in/sign-in.html',
            controller: 'SignInPageController',
            publicAccess: true
        })
        .when('/create-task', {
            templateUrl: 'app/components/taskNew/task-form.html',
            controller: 'TaskFormController'
        })
        .when('/tasks', {
            templateUrl: 'app/components/myTasks/tasks.html',
            controller: 'TasksController'
        })
        .when('/task/:id', {
            templateUrl: 'app/components/taskDetails/task-view.html',
            controller: 'TaskViewController'
        })
        .when('/profile/:id', {
            templateUrl: 'app/components/profile/template.html',
            controller: 'ProfileController'
        })
        .when('/search', {
            templateUrl: 'app/components/taskSearch/taskSearch.html',
            controller: 'TaskSearchController'
        })
        .when('/settings', {
            templateUrl: 'app/components/userSettings/template.html',
            controller: 'SettingsController'
        })
        .otherwise({redirectTo: '/'});

    });

})();
