import { TestBed, inject } from '@angular/core/testing';

import { HkejComponent } from './hkej.component';

describe('a hkej component', () => {
	let component: HkejComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HkejComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HkejComponent], (HkejComponent) => {
		component = HkejComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});