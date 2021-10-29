import { combineEpics } from 'redux-observable';
import { cartEpic } from './cart';
import { productsEpic } from './products';
import { ordersEpic } from './orders';

export const rootEpic = combineEpics(
    cartEpic, 
    productsEpic,
    ordersEpic
  );
  