import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort, MatSort, MatTableDataSource } from '@angular/material';
import { noop as _noop } from 'lodash-es';
import { SuppliersData, OrderDetailsData } from './app.model';
import { HttpDataService } from './app.data.service';

interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-main-component',
  templateUrl: './app.main.component.html',
  styleUrls: [ './app.main.component.css' ]
})
export class MainComponent implements OnInit {
  order: OrderDetailsData;
  orders: Array<OrderDetailsData>;
  dataSource: MatTableDataSource<OrderDetailsData>;
  limit: number = 1000;
  displayedColumns: Array<string>;// = ['position', 'name', 'weight', 'symbol'];
  full: boolean = true;
  tableColumnHeaders: Array<string>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serv: HttpDataService) {
    this.order = new OrderDetailsData(0, '', '', new Date(), new Date(), new Date(), '', 0, '', '', '', '', '');
    this.orders = new Array<OrderDetailsData>();
    this.displayedColumns = new Array<string>();
  }

  ngOnInit() {
    for(let c in this.order) {
      this.displayedColumns.push(c);
    }
    this.loadData();
  }

  handleScroll = (scrolled: boolean) => {
    console.timeEnd('lastScrolled');
    scrolled ? this.loadData() : _noop();
    console.time('lastScrolled');
  }
  hasMore = () => !this.dataSource || this.dataSource.data.length < this.limit;

  // getData() {
  //   const data: Element[] = this.dataSource
  //     ? [...this.dataSource.data, ...ELEMENT_DATA]
  //     : ELEMENT_DATA;
  //   this.dataSource = new MatTableDataSource(data);
  //   this.dataSource.sort = this.sort;
  // }

  loadData(): void {
    this.serv.get().subscribe((resp)=> {
     this.orders = this.dataSource
      ? [...this.dataSource.data, ...resp]
      : resp;
     this.dataSource = new MatTableDataSource(this.orders);
     this.dataSource.sort = this.sort;

    },(error)=>{
      console.log(`Error Occures ${error}`);
    });
  }
  selectRow = (row)=> {
    alert(JSON.stringify(row));
  }
}
