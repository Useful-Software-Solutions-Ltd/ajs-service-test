'use strict';
describe('testService4', function () {
    var provider;
    //invoke the module containing testService1
    beforeEach(angular.mock.module('app'));
    beforeEach(function () {
        angular.mock.module(function (testService4Provider) {
            provider = testService4Provider;
        });
    });
    describe('testService4Provider', function () {
        beforeEach(inject()); //important module won't be  loaded until inject is called 
        describe('configure', function () {
            it('should extend the default options with those supplied', function () {
                var options = {
                    greeting: 'hola'
                };
                sinon.spy(angular, 'extend');
                provider.configure(options);
                expect(angular.extend.calledWith(options)).toBeTruthy();
                angular.extend.restore();
            });
        });
        describe('$get', function () {
            it('should return the testService4Provider instance', function () {
                var result = provider.$get();
                //need to find a better way of testing this
                expect(result.greet).not.toBeNull();
            });
        });
    });
    describe('greet', function () {
        it('should use the configured greeting', function () {
            var options = {
                greeting: 'hola'
            };
            sinon.spy(angular, 'extend');
            provider.configure(options);
            inject(function (testService4) {
                var result = testService4.greet("Dave");
                expect(result).toBe("hola Dave");
            });
        });
    });
});
//# sourceMappingURL=testService4.spec.js.map