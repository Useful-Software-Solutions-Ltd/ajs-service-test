module app {
    'use strict';

    export interface ItestService3 {
        greet(name: string, callback: (greeting: string) => any): void;
    }

    testService3.$inject = ['$q'];

    function testService3($q: ng.IQService): ItestService3 {
        var service: ItestService3 = {
            greet: greet
        };

        return service;

        function greet(name: string, callback: (greeting: string) => any): void {
            setTimeout(() => {
                    callback("Hello " + name);
                }, 100);
        }
    }

    angular.module('app').factory('testService3', testService3);
}