var app;
(function (app) {
    'use strict';
    testService1.$inject = ['$rootScope'];
    function testService1($rootScope) {
        var service = {
            greet: greet
        };
        return service;
        function greet(name) {
            $rootScope.$broadcast('greetCalled', { message: "hello" + name });
        }
    }
    angular.module('app').factory('testService1', testService1);
})(app || (app = {}));
//# sourceMappingURL=testService1.js.map