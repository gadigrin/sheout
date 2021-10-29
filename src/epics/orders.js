import { delay, map } from "rxjs/operators";
import { ordersTypes } from "../reducers/orders";
import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "../utils/utils";


export const ordersEpic = (action$) =>
  action$.ofType(ordersTypes.GET_ORDERS).pipe(
    delay(1000), // Asynchronously wait 1 000ms then continue
    map((action) => ({
      type: ordersTypes.ORDERS_SUCCESS,
      payload: { orders: orders },
    }))
  );

const orders = [
    {
      id: uuidv4(),
      products: [
        {
          id: "12133238758-6d2a-4099-ac92-91b600f6048a",
          title: "shirt",
          price: 40,
          rating: 1,
          imageUrl:
            "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
          amount: 3,
        },
        {
          id: "18338758-6d2a-4099-ac92-91b600f6048a",
          title: "shirt",
          price: 40,
          rating: 1,
          imageUrl:
            "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
          amount: 3,
        },
      ],
      totalCartPrice: 240,
      date: Date(),
      wasNotified: true,
    },
    {
      id: uuidv4(),
      products: [
        {
          id: "12133238758-6d2a-4099-ac92-91b600f6048a",
          title: "shirt",
          price: 40,
          rating: 1,
          imageUrl:
            "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
          amount: 3,
        },
        {
          id: "18338758-6d2a-4099-ac92-91b600f6048a",
          title: "shirt",
          price: 40,
          rating: 1,
          imageUrl:
            "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
          amount: 3,
        },
      ],
      totalCartPrice: 240,
      date: Date(),
      wasNotified: false,
    },
  ]