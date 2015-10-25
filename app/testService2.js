var app;
(function (app) {
    'use strict';
    testService2.$inject = ['$q'];
    function testService2($q) {
        var service = {
            greet: greet
        };
        return service;
        function greet(name) {
            return $q(function (resolve, reject) {
                resolve('Hello ' + name);
            });
        }
    }
    angular
        .module('app')
        .factory('testService2', testService2);
})(app || (app = {}));
//# sourceMappingURL=testService2.js.map