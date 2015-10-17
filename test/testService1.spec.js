'use strict';
describe('testService1', function () {
    var mock$rootScope;
    //invoke the module containing testService1
    beforeEach(angular.mock.module('app'));
    beforeEach(function () {
        //create the mock using sinon
        mock$rootScope = sinon.stub({
            $broadcast: function () { }
        });
        //tell $provide to use the mock not the original $rootScope
        angular.mock.module(function ($provide) {
            $provide.value('$rootScope', mock$rootScope);
        });
    });
    describe('greet', function () {
        //use inject to inject the service into the test function
        it('should raise the greetCalled event when called', inject(function (testService1) {
            testService1.greet("Dave");
            expect(mock$rootScope.$broadcast.calledWith('greetCalled')).toBeTruthy();
        }));
    });
});
//# sourceMappingURL=testService1.spec.js.map