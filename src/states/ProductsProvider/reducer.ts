import { Product } from "../../common/productType";
import { exists, limitReached, moveProduct } from "../../utils";
import { ProductsAction, ProductsState } from "./model";

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
      const id = action.payload as string;
      const { updatedSource, updatedDestination } = moveProduct(state.storage, state.cart, id);

      if (limitReached(state.storage, id)) {
        return state;
      }

      return {
        ...state,
        storage: updatedSource,
        cart: updatedDestination
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload as string;
      const { updatedSource, updatedDestination } = moveProduct(state.cart, state.storage, id);

      if (!exists(state.cart, id)) {
        return state;
      }

      return {
        ...state,
        storage: updatedDestination,
        cart: updatedSource.filter((item) => item.quantity > 0)
      };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
