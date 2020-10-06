(function () {
    "use strict";
    angular.module('bomControle')
      .controller('createUserController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope, $uibModal) {
  
        $rootScope.activetab = $location.url();  
  
        $scope.salvar = function (user) {
          var id = "";
          while (id.length < 20) {
            id += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
          }
          user.id = id;
          var usuarios = JSON.parse(localStorage.getItem('usuarios'));
          usuarios.push(user);
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
          $scope.signupform.$setPristine();

          alert("Usuário criado com sucesso!")
        };
      }]);
  })();