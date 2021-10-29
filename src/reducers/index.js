import { combineReducers } from "redux";
import cartReducer from "./cart";
import productReducer from "./products";
import ordersReducer from "./orders";

export const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  ordersReducer
});
