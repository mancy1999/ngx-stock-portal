import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: 'portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
  dataSource;
  ngOnInit() {

  }

  abs(value) {
    return Math.abs(value);
  }

}

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    return gridData.data[gridData.column.caption.toLowerCase()];
  }
}
