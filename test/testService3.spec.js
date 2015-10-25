'use strict';
describe('testService3', function () {
    //invoke the module containing testService1
    beforeEach(angular.mock.module('app'));
    describe('greet', function () {
        //test the result of a returned promise		
        it('should pass expected greeting to callback function when completed', function (done) {
            inject(function (testService3) {
                testService3.greet("Dave", function (result) {
                    expect(result).toBe("Hello Dave");
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=testService3.spec.js.map