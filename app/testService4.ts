module app {
    'use strict';

    export interface ItestService4Options {
        greeting: string;
    }

    export interface ItestService4 {
        greet(name: string): string;
    }

    export interface ItestService4Provider extends ng.IServiceProvider {
        configure(options: ItestService4Options): void;
    }

    class testService4Provider implements ItestService4Provider {
       options: ItestService4Options = {
            greeting: 'hello'
        }

        configure(options: ItestService4Options): void {
            angular.extend(this.options, options);
        }

        $get(): ItestService4 {
            var service: ItestService4 = {
                greet: greet
            };

            return service;

            function greet(name: string): string {
                return this.options + ' ' + name;
            }
        };
    }

    angular
        .module('app')
        .provider('testService4', testService4Provider);
}