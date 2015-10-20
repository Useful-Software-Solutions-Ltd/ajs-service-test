'use strict';
describe('testService', function () {
    //invoke the module containing testService
    beforeEach(angular.mock.module('app'));
    describe('greet', function () {
        //use inject to inject the service into the test function
        it('should return hello + param', inject(function (testService) {
            var result = testService.greet("Dave");
            expect(result).toBe("Hello Dave");
        }));
    });
});
//# sourceMappingURL=testService.spec.js.map