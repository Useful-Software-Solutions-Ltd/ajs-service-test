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
        module(function ($provide) {
            $provide.value('$rootScope', mock$rootScope);
        });
    });
    describe('greet', function () {
        //use inject to inject the service into the test function
        it('should return hello + param', inject(function (testService1) {
            testService1.greet("Dave");
            expect(mock$rootScope.$broadcast.called).toBeTruthy();
        }));
        //use an async test calling done once the event has been handled		
        /*it('should fire greetCalled event', function(done) {
            inject(function(testService1: app.ItestService1) {
                testService1.greet("Dave");
                expect("hello Dave").toBe("hello Dave");



            });
        });*/
    });
});
//# sourceMappingURL=testService1.spec.js.map