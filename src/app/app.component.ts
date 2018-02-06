import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';
import { HttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // url = 'http://www.aastocks.com/tc/stocks/quote/dynamic-chart.aspx?symbol=00001';
  herokuUrl = '';
  constructor(private httpClient: HttpClient,
    private storeServ: LocalStorageService,
    private ntf: NzNotificationService) {
  }

  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
}
