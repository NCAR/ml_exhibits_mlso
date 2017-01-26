(function () {
    'use strict';
    angular.module("edu.ucar.scied.mlso", [
    "edu.ucar.scied.mlso.controller",
    "edu.ucar.scied.webapp.controller",
    "edu.ucar.scied.webapp.service",
    "edu.ucar.scied.footer.service",
    "edu.ucar.scied.footer.directive",
    "edu.ucar.scied.filters",
    "edu.ucar.scied.services",
    "ngRoute",
    "ngMaterial",
    "angulartics",
    "angulartics.google.analytics"
    ]).
    config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "js/shared/page.html",
            controller: "homeCtrl",
        }).
        otherwise({
            redirectTo: '/screensaver'
        });
    }]);
})();