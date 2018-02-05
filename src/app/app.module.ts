import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockListItemComponent } from './components/stock-list/stock-list-item/stock-list-item.component';
import { TrendComponent } from './components/trend/trend.component';
import { NumberPipe } from './pipe/number.pipe';
import { SafePipe } from './pipe/iframe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockListComponent,
    StockListItemComponent,
    TrendComponent,
    NumberPipe,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
