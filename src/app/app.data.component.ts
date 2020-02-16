import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-component',
  template: `
    <div></div>
  `
})
export class DataComponent implements OnInit {
  @Input() dataValue: number;
  constructor() {
    this.dataValue =0;
   }
  ngOnInit(): void { }


}
