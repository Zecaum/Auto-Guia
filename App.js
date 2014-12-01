(function(){
    'use strict';
    angular.module('autoguiaApp', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', function($routeProvider){
                $routeProvider
                    .when('/home', {
                        templateUrl: 'parciais/home.html'
                    })
                    .when('/missao', {
                        templateUrl: 'parciais/missao.html'
                    })
                    .when('/servicos', {
                        templateUrl: 'parciais/servicos.html'
                    })
                    .when('/quemsomos', {
                        templateUrl: 'parciais/quemsomos.html'
                    })
                    .otherwise('/home');

        }]);

}());