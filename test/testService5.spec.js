'use strict';
describe('testService5', function () {
    //invoke the module containing testService5
    beforeEach(angular.mock.module('app'));
    describe('testService5Provider', function () {
        var provider;
        //get the provider to use in tests
        beforeEach(function () {
            angular.mock.module(function (testService5Provider) {
                provider = testService5Provider;
            });
        });
        beforeEach(inject()); //important module won't be loaded until inject is called 
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
            it('should return the testService5Provider instance', function () {
                var result = provider.$get();
                //need to find a better way of testing this
                expect(result.greet).not.toBeNull();
            });
        });
    });
    describe('greet', function () {
        var mockTestService4;
        beforeEach(function () {
            angular.mock.module(function (testService5Provider, $provide) {
                testService5Provider.configure({
                    greeting: 'hola'
                });
                mockTestService4 = sinon.stub({
                    greet: function () { }
                });
                mockTestService4.greet.returns('hello Dave');
                $provide.value('testService4', mockTestService4);
            });
        });
        it('should call testService4.greet() with the correct name', function () {
            inject(function (testService5) {
                testService5.greet("Dave");
                expect(mockTestService4.greet.calledWith('Dave')).toBeTruthy();
            });
        });
        it('should use the configured greeting', function () {
            inject(function (testService5) {
                var result = testService5.greet("Dave");
                expect(result).toBe("hola hello Dave");
            });
        });
    });
});
//# sourceMappingURL=testService5.spec.js.map