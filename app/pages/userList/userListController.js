(function () {
    "use strict";
    angular.module('bomControle')
        .controller('userListController', ['$scope', 'userHttpServices', '$rootScope', function ($scope, userHttpServices, $rootScope) {

            $scope.listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
            $scope.listaUsuariosBackup = JSON.parse(localStorage.getItem('usuarios'));

            
       
			$scope.searchFilter = function (searchdata) {

                const filtrado = $scope.listaUsuariosBackup.filter((x) => x.name || x.email)
                const filtered = filtrado.filter((x) => {
                    return x.name.toLowerCase().includes((searchdata.currentTarget.value).toLowerCase()) ||
                    x.email.toLowerCase().includes((searchdata.currentTarget.value).toLowerCase());
                });
                $scope.listaUsuarios = filtered;
			};

            $scope.remove = function(user)
            {
                var Delete = confirm('Se deseja excluir o cadastro clique em OK!');
                if (Delete)
                {
                    for (var i = 0; i < $scope.listaUsuarios.length; i++)
                    {
                        if ($scope.listaUsuarios[i].email == user.email)
                        {
                            $scope.listaUsuarios.splice(i, 1);
                            localStorage.setItem("usuarios", JSON.stringify($scope.listaUsuarios))
                            return;
                        }
                    }
                }
            }
        }]);
        
})();