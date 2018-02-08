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
import { TrendComponent } from './components/trend/trend.component';
import { NumberPipe } from './pipe/number.pipe';
import { SafePipe } from './pipe/iframe.pipe';
import { AngularWebStorageModule } from 'angular-web-storage';
import { RouterModule, Routes } from '@angular/router';
import { HkejComponent } from './components/hkej/hkej.component';
import { PortfolioComponent, GridCellDataPipe } from './components/portfolio/portfolio.component';
import { BackTestComponent } from './components/backTest/backTest.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DevExtremeModule } from 'devextreme-angular';
import { RealtimeQuoteComponent } from './route/realtime-quote/realtime-quote.component';
import { StockListItemComponent } from './components/stock-list-item/stock-list-item.component';

const Components = [
  StockListComponent,
  StockListItemComponent,
  // ProfolioComponent,
  PortfolioComponent,
  HkejComponent,
  BackTestComponent,
  WelcomeComponent,
  RealtimeQuoteComponent,
];

const Pipes = [
  SafePipe,
  GridCellDataPipe,
];

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quote', component: RealtimeQuoteComponent },
  { path: 'hkej/:id', component: HkejComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'backTest', component: BackTestComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome' }
];



export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendComponent,
    Components,
    NumberPipe,
    Pipes,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgxEchartsModule,
    AngularWebStorageModule,
    appRouting,
    DevExtremeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
