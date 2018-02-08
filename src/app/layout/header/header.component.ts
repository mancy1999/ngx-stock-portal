import { Component, OnInit } from '@angular/core';
import { headerMenu } from '../../../assets/menu';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
  menu = headerMenu;
  constructor() {

  }

  ngOnInit() { }
}

