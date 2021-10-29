import { delay, map } from "rxjs/operators";
import { cartTypes } from "../reducers/cart";
import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "../utils/utils";


export const cartEpic = (action$) =>
  action$.ofType(cartTypes.PROCESS_ORDER).pipe(
    delay(1000), // Asynchronously wait 1 000ms then continue
    map((action) => ({
      type: cartTypes.PROCESS_SUCCESS,
      payload: { orders: '' },
    }))
  );