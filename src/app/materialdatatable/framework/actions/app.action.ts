import {createAction, props} from '@ngrx/store';
import { OrderDetailsData } from '../../app.model';
// the new action creation syntax
export const getOrders =  createAction(
  '[Orders] Get Orders'
);
export const getOrdersSuccess =  createAction(
  '[Orders] Get Orders Success', // acction type
   props<{orders: OrderDetailsData[]}>() // payload (input and/or output parameter )
);
export const getOrderById = createAction(
  '[Orders]Get Orders By Id',
  props<{payload: number}>()
);
export const getOrdersByIdSuccess = createAction(
  '[Orders]Get Orders By Id Success',
  props<{order: OrderDetailsData}>()
);
