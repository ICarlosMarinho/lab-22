import { createContext, useReducer } from "react";
import { ProductsContextValue, ProductsState } from "./ProductsProvider.model";
import productsReducer from "./ProductsProvider.reducer";

const defaultState: ProductsState = { cart: [], storage: [] };

export const ProductsContext = createContext<ProductsContextValue>({
  state: defaultState,
  dispatch: () => {}
});

const ProductsProvider = ({ children }: WithChildren) => {
  const [state, dispatch] = useReducer(productsReducer, defaultState);

  return <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
