import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouter-component',
  template:`
     <table class="table table-bordered table-striped">
       <tr>
         <td>
           <a [routerLink]="['']">Order List</a>
         </td>
       </tr>
     </table>
     <hr/>
     <router-outlet></router-outlet>
  `
})
export class MainRouterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
