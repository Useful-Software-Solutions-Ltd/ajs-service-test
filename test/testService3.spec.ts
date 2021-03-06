'use strict'

describe('testService3', function(): void {
	
	//invoke the module containing testService3
	beforeEach(angular.mock.module('app'));

	describe('greet', function(): void {					
		//test the result of a returned promise		
		it('should pass expected greeting to callback function when completed', function(done) {
			inject(function(testService3: app.ItestService3) {
				testService3.greet("Dave", (result) => {
					expect(result).toBe("Hello Dave");
					done();
				});
			});
		});
	});
});