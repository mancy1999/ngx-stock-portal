import { TestBed, inject } from '@angular/core/testing';

import { BackTestComponent } from './backTest.component';

describe('a backTest component', () => {
	let component: BackTestComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BackTestComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BackTestComponent], (BackTestComponent) => {
		component = BackTestComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});