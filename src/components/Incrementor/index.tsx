import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useContext } from "react";

import { ProductsContext } from "../../states/ProductsProvider";
import { exists, limitReached } from "../../utils";
import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: string;
};

const Incrementor = ({ id }: IncrementorProps) => {
  const { state, dispatch } = useContext(ProductsContext);

  const getHandler = (type: "increment" | "decrement") => {
    return () => {
      if (type === "increment") {
        dispatch({
          type: "ADD_TO_CART",
          payload: id
        });
      } else {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: id
        });
      }
    };
  };

  const getQuantity = () => {
    return state.cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <Wrapper>
      <IconWrapper disabled={!exists(state.cart, id)} onClick={getHandler("decrement")}>
        <SubtractIcon aria-label="Subtract item" />
      </IconWrapper>
      <Quantity>{getQuantity()}</Quantity>
      <IconWrapper disabled={limitReached(state.storage, id)} onClick={getHandler("increment")}>
        <PlusIcon aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Incrementor;
