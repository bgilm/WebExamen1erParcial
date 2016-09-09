'use strict';

/**
 * @ngdoc overview
 * @name examenCurrencyApp
 * @description
 * # examenCurrencyApp
 *
 * Main module of the application.
 */
var App= angular.module('examenCurrencyApp', []);

App.controller('listaTodoController',function($scope,$http){
               $http.get('../monedas.json')
                   .then(function(res){
                    $scope.monedas=res.data;
                });
});
