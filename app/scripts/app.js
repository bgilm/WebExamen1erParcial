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

App.controller('listaTodoController',function($scope,$http, $interval){

  $interval(
  $http.get('../monedas.json').then(function(res){
    $scope.monedas=res.data;
  }), 5000);

  $scope.convertir = function(cantidad, valor){
    var resultado = 0.0;
    resultado = cantidad*valor;
    return resultado;

    }

});
