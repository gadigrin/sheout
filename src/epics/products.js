import { delay, map } from "rxjs/operators";
import { productTypes } from "../reducers/products";
import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "../utils/utils";


export const productsEpic = (action$) =>
  action$.ofType(productTypes.GET_PRODUCTS).pipe(
    delay(1000), // Asynchronously wait 1 000ms then continue
    map((action) => ({
      type: productTypes.PRODUCTS_SUCCESS,
      payload: { products: products },
    }))
  );

const products = [
  {
    id: uuidv4(),
    title: "shirt",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
  },
  {
    id: uuidv4(),
    title: "pants",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
  },
  {
    id: uuidv4(),
    title: "shirt",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
  },
  {
    id: uuidv4(),
    title: "pants",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
  },
  {
    id: uuidv4(),
    title: "shirt",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
  },
  {
    id: uuidv4(),
    title: "pants",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
  },
  {
    id: uuidv4(),
    title: "shirt",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=800x800",
  },
  {
    id: uuidv4(),
    title: "pants",
    price: getRandomInt(1, 50),
    rating: getRandomInt(0, 5),
    imageUrl:
      "https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg",
  },
];
