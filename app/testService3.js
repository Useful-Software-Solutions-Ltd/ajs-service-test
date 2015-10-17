var app;
(function (app) {
    'use strict';
    testService3.$inject = ['$q'];
    function testService3($q) {
        var service = {
            greet: greet
        };
        return service;
        function greet(name, callback) {
            setTimeout(function () {
                callback("Hello " + name);
            }, 100);
        }
    }
    angular.module('app').factory('testService3', testService3);
})(app || (app = {}));
//# sourceMappingURL=testService3.js.map