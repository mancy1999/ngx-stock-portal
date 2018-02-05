import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // url = 'http://www.aastocks.com/tc/stocks/quote/dynamic-chart.aspx?symbol=00001';

  herokuUrl = '';

  url = 'http://stock360.hkej.com/quotePlus/1';
  url_prefix = 'http://stock360.hkej.com/quotePlus/';

  constructor(private httpClient: HttpClient) {
 
  }

  openUrl(stock) {
    this.url = `${this.url_prefix}${this.pad(stock.Symbol, 4)}`;
    console.log(this.url);
  }

  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }


}
