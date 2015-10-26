'use strict';
describe('testService2', function () {
    //invoke the module containing testService2
    beforeEach(angular.mock.module('app'));
    beforeEach(function () {
    });
    describe('greet', function () {
        //test the result of a returned promise		
        it('should resolve promise with correct greeting', inject(function (testService2, $rootScope) {
            testService2.greet("Dave")
                .then(function (result) {
                expect(result).toBe("Hello Dave");
            });
            $rootScope.$digest();
        }));
        it('should resolve promise with correct greeting (spy approach)', inject(function (testService2, $rootScope) {
            var resolveHandler = sinon.spy();
            testService2.greet("Dave")
                .then(resolveHandler);
            $rootScope.$digest();
            expect(resolveHandler.calledWith("Hello Dave")).toBeTruthy();
        }));
    });
});
//# sourceMappingURL=testService2.spec.js.map