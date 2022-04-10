import { Dispatch, SetStateAction } from "react";

export interface ProductsContextValue {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}
