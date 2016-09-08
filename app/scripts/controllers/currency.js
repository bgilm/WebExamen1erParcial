
    var modelo= {

        empleados:[{cuenta:"123456789", nombre:"Benjamin Gil Mendoza",departamento:"Limpieza"},
                {cuenta:"987654321",nombre:"Andres Villavicencio Escorcia",departamento:"CEO"},
                {cuenta:"912837465", nombre:"Sheller Lobster Monster",departamento:"CTO"}]
    };
    var listaTodo = angular.module("listaTodo",[]);
    listaTodo.controller("listaTodoController",function($scope){
       $scope.todo = modelo;
        $scope.tareasIncompletas = function(){
            var contador = 0;
            angular.forEach($scope.todo.acciones,function(item){
                if(!item.hecho){contador++;}
            });
            return contador;
        }


    $scope.nivelAlerta = function(){
        return $scope.tareasIncompletas()<3 ? "label-success" : "label-warning";
    }
    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }
    $scope.remove = function(item) {
      var index = $scope.todo.empleados.indexOf(item);
      $scope.todo.empleados.splice(index, 1);
    }
    $scope.updateName = function(item, newName){
      item.nombre = newName;
    }
    $scope.nuevoEmpleado = function(actionText1, actionText2, actionText3){
        $scope.todo.empleados.push({cuenta:actionText1, nombre: actionText2,departamento:actionText3});
    }
    });
