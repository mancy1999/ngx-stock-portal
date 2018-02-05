import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IStockList } from '../stock-list.component';

@Component({
  selector: 'app-stock-list-item',
  templateUrl: 'stock-list-item.component.html'
})

export class StockListItemComponent implements OnInit {
  @Input() stock: IStockList;
  @Output() notify: EventEmitter<any> = new EventEmitter();
  ngOnInit() { }

  openUrl() {
    this.notify.emit(this.stock);
  }
}
