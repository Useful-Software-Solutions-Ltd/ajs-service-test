'use strict'

describe('testService2', () => {
	
	//invoke the module containing testService1
	beforeEach(angular.mock.module('app'));

	beforeEach(() => {
	});

	describe('greet', () => {					
		//test the result of a returned promise		
		it('should resolve promise with correct greeting', inject(function(testService2: app.ItestService2, $rootScope: ng.IRootScopeService) {
			testService2.greet("Dave")
				.then((result) => {
					$rootScope.$digest();
					//expect(result).toBe("Hello Dave");
					expect(false).toBe(true);
				});				
		}));
	});
});