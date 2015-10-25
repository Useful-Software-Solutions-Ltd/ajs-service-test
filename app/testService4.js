var app;
(function (app) {
    'use strict';
    var testService4Provider = (function () {
  
            var options = {
                greeting: 'hello'
            };
       
        testService4Provider.prototype.configure = function (options) {
            angular.extend(this.options, options);
        };
        testService4Provider.prototype.$get = function () {
            var service = {
                greet: greet
            };
            return service;
            function greet(name) {
                return this.options + ' ' + name;
            }
        };
        ;
        return testService4Provider;
    })();
    angular
        .module('app')
        .provider('testService4', testService4Provider);
})(app || (app = {}));
//# sourceMappingURL=testService4.js.map