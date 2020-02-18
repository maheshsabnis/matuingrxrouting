import { OrderDetailsData } from '../../app.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { HttpDataService } from '../../app.data.service';
import { IAppOrderState } from '../state/app.state';
import { selectOrdersList } from '../selectors/app.selector';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { OrdersActions } from '../actions';

@Injectable()
export class OrdersEffects {
  getProduct$ = createEffect(() =>  this._action$.pipe(
    ofType(OrdersActions.getOrderById),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectOrdersList))),
    switchMap(([id, orders]) => {
      const selectedOrder = orders.filter(order => order.OrderId === +id)[0];
      console.log(`in effect ${id} ${JSON.stringify(selectedOrder)}`);
      return of(OrdersActions.getOrdersByIdSuccess({order : selectedOrder}));
    })
  ));
  getOrders$ = createEffect(() => this._action$.pipe(
    ofType(OrdersActions.getOrders),
    switchMap(() => this._serv.get()),
    switchMap((orders: OrderDetailsData[]) => of(OrdersActions.getOrdersSuccess({orders})))
  ));


  constructor(
    // tslint:disable-next-line: variable-name
    private _serv: HttpDataService,
    // tslint:disable-next-line: variable-name
    private _action$: Actions,
    // tslint:disable-next-line: variable-name
    private _store: Store<IAppOrderState>
  ){}
}
