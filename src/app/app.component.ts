import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',  // the custom HTML Tag that will be used for rendering compoent's html
  templateUrl: './app.component.html', // the HTML UI
  styleUrls: ['./app.component.css'] // styles used by the UI
})
export class AppComponent {
  title = 'my-ng-app';
  header: string;
  name: string;
  @Input()valueParam:number;

  constructor(){
    this.header = 'The First Component';
    this.name = '';
    this.valueParam = 100;
  }

  display(): void {
     this.header = 'The New Header....';
  }
}
