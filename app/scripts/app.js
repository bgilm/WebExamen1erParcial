'use strict';

/**
 * @ngdoc overview
 * @name examenCurrencyApp
 * @description
 * # examenCurrencyApp
 *
 * Main module of the application.
 */
var App= angular.module('examenCurrencyApp', ['angularjs-dropdown-multiselect']);

App.controller('listaTodoController',function($scope,$http, $interval){

  $interval(
  $http.get('../monedas.json').then(function(res){
    $scope.monedas=res.data;
    $scope.a = {
    select: []
     };

  }), 5000);

  $scope.convertir = function(cantidad, valor1, valor2){
    var resultado = 0.0;
    resultado = cantidad*valor1/valor2;
    return resultado;

    }

});
