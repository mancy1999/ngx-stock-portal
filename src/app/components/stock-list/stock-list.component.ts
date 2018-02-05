import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: 'stock-list.component.html',
  styleUrls: ['stock-list.component.css']
})

export class StockListComponent implements OnInit {
  symbolList: string[] = [];
  stockList: IStockList[] = [{
    Symbol: '1',
    Name: '長江',
    PreClose: 12.5,
    Open: 12,
    High: 13,
    Low: 12,
    Last: 13,
    Change: 1,
    PctChange: 1,
    Turnover: 132113123,
    Volume: 123123123123,
    LastUpdate: new Date(),
  }, {
    Symbol: '2',
    Name: '火箭',
    PreClose: 12.5,
    Open: 12,
    High: 13,
    Low: 12,
    Last: 13,
    Change: 1,
    PctChange: 1,
    Turnover: 132113123,
    Volume: 123123123123,
    LastUpdate: new Date(),
  }];

  showAddSymbolWidget = false;
  newAddSymbol: string;


  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }


  showSymbol() {
    this.showAddSymbolWidget = true;
  }

  addSymbol() {
    this.symbolList.push(this.newAddSymbol);
    this.newAddSymbol = null;
    this.showAddSymbolWidget = false;
  }

  cancelSymbol() {
    this.newAddSymbol = null;
    this.showAddSymbolWidget = false;
  }

  notifyFromChild(e) {
    this.notify.emit(e);
  }

}

export interface IStockList {
  Symbol: string;
  Name: string;
  PreClose: Number;
  Open: Number;
  High: Number;
  Low: Number;
  Last: Number;
  Change: Number;
  PctChange: Number;
  Turnover: Number;
  Volume: Number;
  LastUpdate: Date;
}

