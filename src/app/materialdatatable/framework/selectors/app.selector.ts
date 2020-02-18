import { createSelector } from '@ngrx/store';
import { IAppOrderState } from '../state/app.state';
import { IOrdersState } from '../state/app.order.state';


const selectOrders = (state: IAppOrderState) => state.orders;
export const selectOrdersList = createSelector(
  selectOrders,
  (state: IOrdersState) => state.orders
);
export const selectOrder = createSelector(
  selectOrders,
  (state: IOrdersState) => state.selectedOrder // write query type logic (state, id)=> state.products[i].ProdutcId ==id
);
