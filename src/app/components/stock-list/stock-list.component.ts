import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-stock-list',
  templateUrl: 'stock-list.component.html',
  styleUrls: ['stock-list.component.css']
})

export class StockListComponent implements OnInit {

  @Input() dataSource;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  _notify(e) {
    this.notify.emit(e);
  }

  _delete(e) {
    this.delete.emit(e);
  }

}


