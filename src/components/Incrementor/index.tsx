import { useContext } from "react";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Container, Quantity } from "./Incrementor.styles";
import { IncrementorProps } from "./Incrementor.model";
import { ProductsContext } from "../../states/ProductsProvider";
import Button from "../Button";

const Incrementor = ({ id, selectedQuantity, setSelectedQuantity }: IncrementorProps) => {
  const { products } = useContext(ProductsContext);

  const getHandleQuantityClick = (type: "increment" | "decrement") => {
    return () => {
      const product = products.find((item) => item.id === id);

      if (!!product) {
        if (type === "increment" && selectedQuantity < product.quantity) {
          setSelectedQuantity(selectedQuantity + 1);
        } else if (type === "decrement" && selectedQuantity > 1) {
          setSelectedQuantity(selectedQuantity - 1);
        }
      }
    };
  };

  return (
    <Container>
      <Button width="30%" onClick={getHandleQuantityClick("decrement")}>
        <SubtractIcon height="100%" aria-label="Subtract item" />
      </Button>
      <Quantity>{selectedQuantity}</Quantity>
      <Button width="30%" onClick={getHandleQuantityClick("increment")}>
        <PlusIcon height="100%" aria-label="Add item" />
      </Button>
    </Container>
  );
};

export default Incrementor;
