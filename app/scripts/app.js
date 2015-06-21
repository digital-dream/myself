'use strict';

/**
 * @ngdoc overview
 * @name cabalaApp
 * @description
 * # cabalaApp
 *
 * Main module of the application.
 */
angular.module('mYselfApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mobile-angular-ui',
    'cordova'
  ]).config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    }).when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/login'
    });
});