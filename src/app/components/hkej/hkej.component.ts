import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hkej',
  templateUrl: 'hkej.component.html'
})

export class HkejComponent implements OnInit, OnDestroy {
  url = 'https://stock360.hkej.com/quotePlus/1';
  url_prefix = 'https://stock360.hkej.com/quotePlus/';
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.openUrl();
  }

  openUrl() {
    this.url = `${this.url_prefix}${this.id}`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}





