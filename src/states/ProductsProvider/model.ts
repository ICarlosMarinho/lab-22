import { Dispatch } from "react";
import { Product } from "../../common/productType";

export interface ProductsState {
  storage: Product[];
  cart: Product[];
}

export interface ProductsAction {
  type: "SET_PRODUCTS" | "SET_CART" | "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: Product[] | string;
}

export interface ProductsContextValue {
  state: ProductsState;
  dispatch: Dispatch<ProductsAction>;
}
