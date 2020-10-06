(function () {
    "use strict";
    angular.module('bomControle')
        .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/list-user', {
                templateUrl: 'app/pages/userList/userList.html',
                controller: 'userListController',
            });

    }]);
})();