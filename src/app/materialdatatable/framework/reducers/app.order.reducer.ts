import { createReducer, on } from '@ngrx/store';
import { OrdersActions } from '../actions';
import { initOrderState } from '../state/app.order.state';

export const reducer = createReducer(
   initOrderState,
   on(OrdersActions.getOrdersSuccess, (state, {orders}) => ({
      ...state,
      orders
   })),
   on(OrdersActions.getOrdersByIdSuccess, (state, {order}) => ({
    ...state,
    selectedOrder: order
 }))
);
