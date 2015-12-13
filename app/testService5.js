var app;
(function (app) {
    'use strict';
    var testService5Provider = (function () {
        function testService5Provider() {
            this.options = {
                greeting: 'hello'
            };
            this.$get.$inject = ['testService4'];
        }
        testService5Provider.prototype.configure = function (options) {
            angular.extend(this.options, options);
        };
        testService5Provider.prototype.$get = function (testService4) {
            var _this = this;
            var service = {
                greet: function (name) {
                    return _this.options.greeting + ' ' + testService4.greet(name);
                }
            };
            return service;
        };
        return testService5Provider;
    })();
    angular
        .module('app')
        .provider('testService5', testService5Provider);
})(app || (app = {}));
//# sourceMappingURL=testService5.js.map