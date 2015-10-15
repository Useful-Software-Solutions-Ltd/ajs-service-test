'use strict'

describe('testService', function(){
	
	//invoke the module containing testService1
	beforeEach(angular.mock.module('app'));
				
	describe('greet',function(){
		//use inject to inject the service into the test function
		it('should return hello + param', inject (function(testService: app.ItestService){
			var result = testService.greet("Dave");
			
			expect(result).toBe("hello Dave");
		}))
	});	
});