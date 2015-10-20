'use strict'

describe('testService', () => {
	
	//invoke the module containing testService
	beforeEach(angular.mock.module('app'));

	describe('greet', () => {
		//use inject to inject the service into the test function
		it('should return hello + param', inject(function(testService: app.ItestService) : void {
			var result = testService.greet("Dave");

			expect(result).toBe("Hello Dave");
		}))
	});
});