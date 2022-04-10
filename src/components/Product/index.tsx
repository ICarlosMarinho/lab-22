import Button from "../Button";
import Incrementor from "../Incrementor";
import { ProductProps } from "./Product.model";
import { Container, Image } from "./Product.styles";

const Product = ({ id, name, price, picture }: ProductProps) => {
  const handleQuantityChange = (type: "increment" | "decrement") => {
    //TODO
  };

  return (
    <Container>
      <Image src={picture} alt={`Imagem de referência ${name}`} />
      <span>{name}</span>
      <span>{price}</span>
      <Incrementor quantity={1} />
      <Button>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Product;
