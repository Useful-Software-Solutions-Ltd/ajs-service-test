module app {
    'use strict';

    export interface ItestService {
        greet(name: string): string;
    }

    testService.$inject = [];

    function testService(): ItestService {
        var service: ItestService = {
                greet: greet
            };

        return service;

        function greet(name: string): string {
            return "Hello " + name;
        }
    }

    angular.module('app').factory('testService', testService);
}