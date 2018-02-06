import { TestBed, inject } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';

describe('a portfolio component', () => {
	let component: PortfolioComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PortfolioComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PortfolioComponent], (PortfolioComponent) => {
		component = PortfolioComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});