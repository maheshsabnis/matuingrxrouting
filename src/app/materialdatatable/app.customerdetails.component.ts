import { Component, OnInit } from '@angular/core';
import { OrdersActions } from './framework/actions';
import { Store, select } from '@ngrx/store';
import { IAppOrderState } from './framework/state/app.state';
import { selectOrder } from './framework/selectors/app.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderDetailsData } from './app.model';

@Component({
  selector: 'app-customerdetails-component',
  templateUrl: './app.customerdetailsview.html'
})
export class CustomerDetailsComponent implements OnInit {
  customerOrder$: Observable<OrderDetailsData>;
  custOrder: OrderDetailsData;
  customerData: string;
  constructor(private _store: Store<IAppOrderState>,
    private router: Router,
    private act: ActivatedRoute) {
     this.customerOrder$ =new Observable<OrderDetailsData>();
     this.custOrder = new OrderDetailsData(0, '', '', new Date(), new Date(), new Date(), '', 0, '', '', '', '', '');
    }

  ngOnInit(): void {
    this.act.params.subscribe((p)=> {
      this._store.dispatch(OrdersActions.getOrderById({payload : p.id}));
      this.customerOrder$ =  this._store.pipe(select(selectOrder));
      this.customerOrder$.subscribe((p) => {
        this.custOrder =p;
        this.customerData = JSON.stringify(this.custOrder);
        console.log(JSON.stringify(this.custOrder));
      });
    });
  }
}
