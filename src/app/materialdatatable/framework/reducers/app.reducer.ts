import {ActionReducerMap} from '@ngrx/store';
import { reducer } from './app.order.reducer';
import { IAppOrderState } from '../state/app.state';

export const mainReducers : ActionReducerMap<IAppOrderState,any> = {
  orders: reducer
};
