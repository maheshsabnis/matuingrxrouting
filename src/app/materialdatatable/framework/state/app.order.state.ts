import { OrderDetailsData } from '../../app.model';

export interface IOrdersState {
  orders: OrderDetailsData[];
  selectedOrder: OrderDetailsData;
}


export const initOrderState: IOrdersState = {
  orders: null,
  selectedOrder: null
};
