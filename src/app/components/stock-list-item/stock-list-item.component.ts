import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-list-item',
  templateUrl: 'stock-list-item.component.html'
})

export class StockListItemComponent implements OnInit {
  @Input() stock: any;
  @Output() notify: EventEmitter<any> = new EventEmitter();
  @Output() removeNotify: EventEmitter<any> = new EventEmitter();
  ngOnInit() { }

  openUrl() {
    this.notify.emit(this.stock);
  }

  delete() {
    this.removeNotify.emit(this.stock);
  }
}
