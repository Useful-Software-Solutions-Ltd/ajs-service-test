module app {
    'use strict';

    export interface ItestService1 {
        greet(name: string): void;
    }

    testService1.$inject = ['$rootScope'];

    function testService1($rootScope: ng.IRootScopeService): ItestService1 {
        var service: ItestService1 = {
                greet: greet
            };

        return service;

        function greet(name: string): void {
            $rootScope.$broadcast('greetCalled', { message: "hello" + name });          
        }
    }

    angular.module('app').factory('testService1', testService1);
}