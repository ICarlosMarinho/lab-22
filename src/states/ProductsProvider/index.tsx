import { createContext, useReducer } from "react";
import { WithChildren } from "../../common/childrenType";
import { ProductsContextValue, ProductsState } from "./model";
import productsReducer from "./reducer";

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
