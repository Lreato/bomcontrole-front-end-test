(function () {
    "use strict";
    angular.module('bomControle')
        .directive('menuPrincipal', [function () {
            return {
                templateUrl: "app/pages/menutop/menutop.html",
                restrict: 'AE',
                scope: {

                },


            };

        }]);
  
})();