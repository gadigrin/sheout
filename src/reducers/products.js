
import { createReducer, createActions } from "reduxsauce";

// *************** types and action creators

const { Types, Creators } = createActions({
  getProducts: null, 
  productsSuccess: ['products'],
  productsFailure: ['error']
});

export const productTypes = Types
export const productsActions = Creators;

// *************** initial state

export const INITIAL_STATE = {
  error: false,
  isLoading: false,
  products: []
};

// *************** reducers

export const getProducts = (state = INITIAL_STATE, action) => {
  return { ...state, isLoading: true, products: [], error: false };
};

export const productsSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, products: action.payload.products, isLoading: false, error: false };
  };

  export const productsFailure = (state = INITIAL_STATE, action) => {
    return { ...state, products: [], isLoading: false, error: true };
  };

// *************** Handlers

export const HANDLERS = {
  [Types.GET_PRODUCTS]: getProducts,
  [Types.PRODUCTS_SUCCESS]: productsSuccess,
  [Types.PRODUCTS_FAILURE]: productsFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
