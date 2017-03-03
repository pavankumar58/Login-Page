/// <reference path="../angular.min.js" />

'use strict';


var app = angular.module('loginApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'partials/login.html',controller : 'loginCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });



}]);