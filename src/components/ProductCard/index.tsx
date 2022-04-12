import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { Product } from "../../common/productType";
import { asCurrency } from "../../utils";

export type ProductProps = Product;

const ProductCard = ({ id, name, price, picture }: ProductProps) => (
  <Wrapper>
    <img src={picture} alt={`Imagem de referência ${name}`} />

    <Info>
      <Column>
        <Text>{name}</Text>
        <Text>{asCurrency(price)}</Text>
      </Column>

      <WrapperIncrementor>
        <Incrementor id={id} />
      </WrapperIncrementor>
    </Info>
  </Wrapper>
);

export default ProductCard;
