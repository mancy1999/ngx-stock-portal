import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-realtime-quote',
  templateUrl: './realtime-quote.component.html',
  styleUrls: ['./realtime-quote.component.css']
})
export class RealtimeQuoteComponent implements OnInit {

  url_prex = 'https://stock-api-hk.herokuapp.com/stock/';
  stock = {
    list: ['00700'],
    displayDataSource: [],
  };

  sortType = 'PctChange';
  showAddSymbolWidget = false;
  newAddSymbol: string;
  timer;

  view = true;

  constructor(private httpClient: HttpClient,
    private ntf: NzNotificationService,
    private storeServ: LocalStorageService, ) {

    this.stock.list = (this.storeServ.get('symbol_list') == null) ? [] : this.storeServ.get('symbol_list');

    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000 * 15);
  }

  ngOnInit() {

  }

  getData() {
    var field = this.sortType;
    console.log(field);

    var actions = this.stock.list.map((x) => {
      return this.httpClient.get(`${this.url_prex}${x}`).toPromise();
    });

    var results = Promise.all(actions);
    results.then(data => {
      this.stock.displayDataSource = data.filter(x => x['Symbol'] != null).sort(function (a, b) {
        if (a[field] > b[field]) {
          return -1;
        }
        if (a[field] < b[field]) {
          return 1;
        }
        return 0;
      });
    });
  }

  getHerokuDataSourceBySymbol(symbol) {
    this.httpClient.get(`${this.url_prex}${symbol}`).subscribe(data => {
      console.log(data);
      if (data['Symbol'] != null) {
        this.stock.list.push(this.pad(data['Symbol'], 5));
        this.storeServ.set('symbol_list', this.stock.list);
        this.stock.displayDataSource.unshift(data);
      } else {
        this.createNotify('warning', '提示', '沒有股票資料');
      }
    }, err => {
      this.createNotify('error', '錯誤', '股票資料API error');
    });
  }

  showSymbol() {
    this.showAddSymbolWidget = true;
  }

  addSymbol() {
    var newSymbol = this.pad(this.newAddSymbol, 5);
    if (this.stock.list.indexOf(newSymbol) < 0) {
      this.getHerokuDataSourceBySymbol(this.newAddSymbol);
    } else {
      this.createNotify('warning', '提示', '已有股票號碼');
    }
    this.newAddSymbol = null;
    this.showAddSymbolWidget = false;

  }

  cancelSymbol() {
    this.newAddSymbol = null;
    this.showAddSymbolWidget = false;
  }


  sortTypeChanged(e) {
    this.sortBy(e);
  }

  sortBy(type) {
    console.log(type);
    this.sortType = type;
    var field = this.sortType;
    this.stock.displayDataSource = this.stock.displayDataSource.sort(function (a, b) {
      // Compare the 2 dates
      if (a[field] > b[field]) {
        return -1;
      }
      if (a[field] < b[field]) {
        return 1;
      }
      return 0;
    });
    console.log(this.stock.displayDataSource);
  }

  notifyFromChild(e) {
    window.open(`http://stock360.hkej.com/quotePlus/${Number(e.Symbol)}`, '_blank');
  }

  delete(e) {
    var symbol = e.Symbol;
    if (symbol) {
      this.stock.list = this.stock.list.filter(x => x != symbol);
      this.storeServ.set('symbol_list', this.stock.list);
      this.getData();
    }
  }

  changeView() {
    this.view = !this.view;
  }

  createNotify(type: string, title: string, content: string = '') {
    this.ntf.create(type, title, content, { nzDuration: 2000 });
  }

  pad(n, width, z = null) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
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

