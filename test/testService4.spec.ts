'use strict'

describe('testService4', function(): void {
	var provider: app.ItestService4Provider;
	
	//invoke the module containing testService1
	beforeEach(angular.mock.module('app'));

	beforeEach(() => {
		angular.mock.module(function(testService4Provider: app.ItestService4Provider): void {
			provider = testService4Provider;
		});
	});

	describe('testService4Provider', function(): void {
		beforeEach(inject()); //important module won't be  loaded until inject is called 
		
		describe('configure', function(): void {
			it('should extend the default options with those supplied', function() {
				var options = {
					greeting: 'hola'
				};

				sinon.spy(angular, 'extend');

				provider.configure(options);

				expect((<Sinon.SinonSpy>angular.extend).calledWith(options)).toBeTruthy();

				(<Sinon.SinonSpy>angular.extend).restore();
			});
		});

		describe('$get', () => {
			it('should return the testService4Provider instance', () => {
				var result = (<ng.IServiceProvider>provider).$get();
				//need to find a better way of testing this
				expect(result.greet).not.toBeNull();
			});
		});
	});

	describe('greet', function(): void {

		it('should use the configured greeting', function() {
			var options = {
				greeting: 'hola'
			};

			sinon.spy(angular, 'extend');

			provider.configure(options);

			inject(function(testService4: app.ItestService4) {

				var result = testService4.greet("Dave");

				expect(result).toBe("hola Dave");
			});
		});
	});
});