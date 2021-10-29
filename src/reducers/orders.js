import { createReducer, createActions } from "reduxsauce";
import { v4 as uuidv4 } from "uuid";
// *************** types and action creators

const { Types, Creators } = createActions({
  showOrders: null,
  getOrders: null, 
  ordersSuccess: ['orders'], 
  ordersFailure: ['error']
});

export const ordersTypes = Types;
export const ordersActions = Creators;

// *************** initial state

export const INITIAL_STATE = {
  // error: false,
  // orders: [],
  isLoading: false,

  error: false,
  isVisible: false,
  orders: [],
};

// *************** reducers

export const getOrders = (state = INITIAL_STATE, action) => {
  console.log('get', action);
  return { ...state, orders: [], isLoading: true, error: false };
};

export const ordersSuccess = (state = INITIAL_STATE, action) => {
  console.log('good', action);
  return { ...state, orders: action.payload.orders, isLoading: false, error: false };
};

export const ordersFailure = (state = INITIAL_STATE, action) => {
  console.log('bad', action);
  return { ...state, orders: [], isLoading: false, error: true };
};

export const showOrders = (state = INITIAL_STATE, action) => {
  console.log(state);
  return ({ ...state, isVisible: !state.isVisible, error: false });
}
  

// *************** Handlers

export const HANDLERS = {
  [Types.SHOW_ORDERS]: showOrders,
  [Types.GET_ORDERS]: getOrders,
  [Types.ORDERS_SUCCESS]: ordersSuccess,
  [Types.ORDERS_FAILURE]: ordersFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
