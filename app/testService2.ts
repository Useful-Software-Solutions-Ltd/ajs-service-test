module app {
    'use strict';

    export interface ItestService2 {
        greet(name: string): ng.IPromise<string>;
    }

    testService2.$inject = ['$q'];

    function testService2($q: ng.IQService): ItestService2 {
        var service: ItestService2 = {
            greet: greet
        };

        return service;

        function greet(name: string): ng.IPromise<string> {
            return $q(function(resolve, reject): any {
                resolve("Hello" + name);
            });
        }
    }

    angular.module('app').factory('testService2', testService2);
}