import { createContext, useState } from "react";
import { ProductsContextValue } from "./ProductsProvider.model";

export const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  setProducts: () => {}
});

const ProductsProvider = ({ children }: WithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  return <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
