import { TestBed, inject } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('a welcome component', () => {
	let component: WelcomeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WelcomeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([WelcomeComponent], (WelcomeComponent) => {
		component = WelcomeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});