(function () {
    "use strict";
    angular.module('bomControle')
        .controller('testFrontEndController', ['$scope', 'userHttpServices', function ($scope, userHttpServices) {
            
            $scope.testFrontEnd = "Teste Front-End";
            let users = localStorage.getItem("usuarios")
            if (!users) {
                userHttpServices.getUsers().then(function (user) {
                    localStorage.setItem('usuarios', JSON.stringify(user.data));
                });
            }

        }]);
})();
