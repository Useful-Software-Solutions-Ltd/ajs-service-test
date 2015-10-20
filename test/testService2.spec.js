'use strict';
describe('testService2', function () {
    //invoke the module containing testService1
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
    });
});
//# sourceMappingURL=testService2.spec.js.map