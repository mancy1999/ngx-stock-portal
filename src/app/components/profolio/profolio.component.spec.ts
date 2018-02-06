import { TestBed, inject } from '@angular/core/testing';

import { ProfolioComponent } from './profolio.component';

describe('a profolio component', () => {
	let component: ProfolioComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProfolioComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProfolioComponent], (ProfolioComponent) => {
		component = ProfolioComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});