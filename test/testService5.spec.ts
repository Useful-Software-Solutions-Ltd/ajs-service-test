'use strict'

describe('testService5', function(): void {	
	
	//invoke the module containing testService5
	beforeEach(angular.mock.module('app'));

	describe('testService5Provider', function(): void {
		var provider: app.ItestService5Provider;
		
		//get the provider to use in tests
		beforeEach(() => {
			angular.mock.module(function(testService5Provider: app.ItestService5Provider): void {
				provider = testService5Provider;
			});
		});

		beforeEach(inject()); //important module won't be loaded until inject is called 
		
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
			it('should return the testService5Provider instance', () => {
				var result = (<ng.IServiceProvider>provider).$get();
				//need to find a better way of testing this
				expect(result.greet).not.toBeNull();
			});
		});
	});

	describe('greet', function(): void {
		var mockTestService4;

		beforeEach(() => {
			angular.mock.module(function(testService5Provider: app.ItestService5Provider, $provide: ng.auto.IProvideService): void {
				testService5Provider.configure({
					greeting: 'hola'
				});

				mockTestService4 = sinon.stub({
					greet: function() { }
				});
				
				(<Sinon.SinonStub>mockTestService4.greet).returns('hello Dave');
								
				$provide.value('testService4', mockTestService4);
			});
		});

		it('should call testService4.greet() with the correct name', function() {
			inject(function(testService5: app.ItestService5) {
				testService5.greet("Dave");

				expect((<Sinon.SinonStub>mockTestService4.greet).calledWith('Dave')).toBeTruthy();
			});
		});

		it('should use the configured greeting', function() {
			inject(function(testService5: app.ItestService5) {

				var result = testService5.greet("Dave");

				expect(result).toBe("hola hello Dave");
			});
		});
	});
});