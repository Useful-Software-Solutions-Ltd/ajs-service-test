var app;
(function (app) {
    'use strict';
    var testService4Provider = (function () {
        function testService4Provider() {
            this.options = {
                greeting: 'hello'
            };
        }
        testService4Provider.prototype.configure = function (options) {
            angular.extend(this.options, options);
        };
        testService4Provider.prototype.$get = function () {
            var _this = this;
            var service = {
                greet: function (name) {
                    return _this.options.greeting + ' ' + name;
                }
            };
            return service;
        };
        return testService4Provider;
    })();
    angular
        .module('app')
        .provider('testService4', testService4Provider);
})(app || (app = {}));
//# sourceMappingURL=testService4.js.map