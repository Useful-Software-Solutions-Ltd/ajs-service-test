var app;
(function (app) {
    'use strict';
    testService.$inject = [];
    function testService() {
        var service = {
            greet: greet
        };
        return service;
        function greet(name) {
            return "hello " + name;
        }
    }
    angular.module('app').factory('testService', testService);
})(app || (app = {}));
//# sourceMappingURL=testService.js.map