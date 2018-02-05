import { TestBed, inject } from '@angular/core/testing';

import { StockListItemComponent } from './stock-list-item.component';

describe('a stock-list-item component', () => {
  let component: StockListItemComponent;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockListItemComponent
      ]
    });
  });

  // instantiation through framework injection
  beforeEach(inject([StockListItemComponent], (StockListItemComponent) => {
    component = StockListItemComponent;
  }));

  it('should have an instance', () => {
    expect(component).toBeDefined();
  });
});
