import { Dispatch, SetStateAction, useContext } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";
import Products from "../Products";
import { Wrapper, Subtotal, Header } from "./styles";
import { ProductsContext } from "../../states/ProductsProvider";
import { asCurrency } from "../../utils";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const { state } = useContext(ProductsContext);

  const getTotal = () => {
    const total = state.cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return asCurrency(total);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      <Products products={state.cart} />
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{getTotal()}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  );
};

export default MenuPayment;
