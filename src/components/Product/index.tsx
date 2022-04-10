import { useState } from "react";
import Button from "../Button";
import Incrementor from "../Incrementor";
import { ProductProps } from "./Product.model";
import { Container, Image } from "./Product.styles";

const Product = ({ id, name, price, picture }: ProductProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <Container>
      <Image src={picture} alt={`Imagem de referência ${name}`} />
      <span>{name}</span>
      <span>{price}</span>
      <Incrementor id={id} selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} />
      <Button>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Product;
