import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-list',
  templateUrl: 'stock-list.component.html',
  styleUrls: ['stock-list.component.css']
})

export class StockListComponent implements OnInit {
  // symbolList: string[] = ['700', '2318', '2628', '1199', '811', '586', '763', '981', '87'];
  url_prex = 'https://stock-api-hk.herokuapp.com/stock/';
  stock = {
    list: ['700', '2318', '2628', '1199', '811', '586', '763', '981', '87'],
    dataSource: [],
    displayDataSource: [],
  };

  showAddSymbolWidget = false;
  newAddSymbol: string;
  timer;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000 * 15);
  }

  ngOnInit() {

  }

  getData() {
    var field = 'Symbol';
    var actions = this.stock.list.map((x) => {
      return this.httpClient.get(`${this.url_prex}${x}`).toPromise();
    });
    var results = Promise.all(actions);

    results.then(data => {
      this.stock.displayDataSource = data.sort(function (a, b) {
        // Compare the 2 dates
        if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] > b[field]) {
          return 1;
        }
        return 0;
      });
    });
  }


  getHerokuDataSourceBySymbol(symbol) {
    this.httpClient.get(`${this.url_prex}${symbol}`).subscribe(data => {
      console.log(data);
      this.stock.displayDataSource.unshift(data);
    }, err => {
      alert(err);
    });
  }


  // getHerokuDataSource(symbol) {
  //   this.httpClient.get(`${this.url_prex}${symbol}`).subscribe(data => {
  //     if (this.stock.dataSource.find(x => x.Symbol === data['Symbol'])) {
  //       this.stock.dataSource.splice(this.stock.dataSource.map(x => x.Symbol).indexOf(data['Symbol']), 1);
  //     }
  //     this.stock.dataSource.push(data);
  //   }, err => {
  //     console.error(err);
  //   });
  // }

  showSymbol() {
    this.showAddSymbolWidget = true;
  }

  addSymbol() {
    this.stock.list.push(this.newAddSymbol);
    this.getHerokuDataSourceBySymbol(this.newAddSymbol);
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

