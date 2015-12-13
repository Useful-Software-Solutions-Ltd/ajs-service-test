module app {
    'use strict';

    export interface ItestService5Options {
        greeting: string;
    }

    export interface ItestService5 {
        greet(name: string): string;
    }

    export interface ItestService5Provider extends ng.IServiceProvider {
        configure(options: ItestService5Options): void;
    }

    class testService5Provider implements ItestService5Provider {
        options: ItestService5Options = {
            greeting: 'hello'
        }

        constructor() {
            this.$get.$inject = ['testService4'];
        }

        configure(options: ItestService5Options): void {
            angular.extend(this.options, options);
        }

        $get(testService4: app.ItestService4): ItestService5 {
            var service: ItestService5 = {
                greet: (name: string) => {
                    return this.options.greeting + ' ' + testService4.greet(name);
                }
            };

            return service;
        }
    }

    angular
        .module('app')
        .provider('testService5', testService5Provider);
}