import { createReducer, createActions } from 'reduxsauce'
import { productTypes } from './products';


// *************** types and action creators

const { Types, Creators } = createActions({
  addToCart: ["product", "amount"],
  updateAmount: ["productId", "amount"],
  removeFromCart: ["productId"],
  showCart: null,
  processOrder: null,
  processSuccess: ['orderId'],
  processFailure: ['error']
});

export const cartTypes = Types;
export const cartActions = Creators;

// *************** initial state

export const INITIAL_STATE = {
    // error: false,
    // cart: [],
    // totalCartPrice: 0, 
    // totalCartItems: 0,
    // showCart: true, 


    error: false,
    cart: [
      {
        id: '12133238758-6d2a-4099-ac92-91b600f6048a',
        title: 'shirt',
        price: 40,
        rating: 1,
        imageUrl: 'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800',
        amount: 3
      },
      {
        id: '18338758-6d2a-4099-ac92-91b600f6048a',
        title: 'shirt',
        price: 40,
        rating: 1,
        imageUrl: 'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800',
        amount: 3
      }
    ],
    totalCartPrice: 240,
    totalCartItems: 6,
    isVisible: false,
    isLoading: false
}

// *************** reducers

export const showCart = (state = INITIAL_STATE, action) => 
  ({ ...state, isVisible: !state.isVisible, error: false });

export const addToCart = (state = INITIAL_STATE, action) => {
    let {product} = action
    console.log(product);
    let newPrice = state.totalCartPrice + product.price * product.amount;
    let newTotal = state.totalCartItems + product.amount;
    return { ...state, totalCartItems: newTotal, totalCartPrice: newPrice, cart: [...state.cart, product],error: false };
}

export const removeFromCart = (state = INITIAL_STATE, action) => {
    let {productId} = action

    let newCart = state.cart.filter((item) => item.id !== productId)
    let newPrice = newCart.reduce((acc, a)=> acc + a.price * a.amount, 0)
    let newTotal = newCart.reduce((acc, a)=> acc + a.amount, 0)
    console.log(newTotal, newPrice, newCart);
    return { ...state,cart: newCart, totalCartItems: newTotal, totalCartPrice: newPrice,error: false };
}

export const updateAmount = (state = INITIAL_STATE, action) => {
    let {product} = action

    let newPrice = state.totalCartPrice + product.price * product.amount;
    let newTotal = state.totalCartItems + product.amount;
    return { ...state, totalCartItems: newTotal, totalCartPrice: newPrice, cart: [...state.cart, product],error: false };
}

export const processOrder = (state = INITIAL_STATE, action) => {

  return { ...state, isLoading: true,error: false };
}

export const processSuccess = (state = INITIAL_STATE, action) => {

  return { ...state,totalCartItems:0, totalCartPrice: 0, cart:[], isLoading: false,error: false };
}

export const processFailure = (state = INITIAL_STATE, action) => {

  return { ...state,isLoading: false,error: true };
}

// *************** Handlers

export const HANDLERS = {
    [Types.ADD_TO_CART]: addToCart,
    [Types.REMOVE_FROM_CART]: removeFromCart,
    [Types.UPDATE_AMOUNT]: updateAmount,
    [Types.SHOW_CART]: showCart,
    [Types.PROCESS_ORDER]: processOrder,
    [Types.PROCESS_SUCCESS]: processSuccess,
    [Types.PROCESS_FAILURE]: processFailure
}


export default createReducer(INITIAL_STATE, HANDLERS)