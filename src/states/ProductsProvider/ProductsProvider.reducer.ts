import { ProductsAction, ProductsState } from "./ProductsProvider.model";

const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        storage: [...(action.payload as Product[])]
      };
    }
    case "SET_CART": {
      return {
        ...state,
        cart: [...(action.payload as Product[])]
      };
    }
    case "ADD_TO_CART": {
      const product = action.payload as Product;
      const newStorage = state.storage.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity - product.quantity;
        }
        return item.quantity > 0 ? item : null;
      });

      return {
        ...state,
        storage: [...newStorage.filter((item) => item !== null)] as Product[],
        cart: [...state.cart, product]
      };
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload as Product;
      const newStorage = state.storage.map((item) => {
        if (item.id === product.id) {
          item.quantity = item.quantity + product.quantity;
        }
        return item;
      });

      return {
        ...state,
        storage: [...newStorage],
        cart: [...state.cart.filter((item) => item.id !== product.id)] as Product[]
      };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
