import { Container } from "./styles";
import ProductCard from "../ProductCard";
import Typography from "../Typography";
import { Product } from "../../common/productType";

export type ProductsProps = {
  products: Product[];
};

const Products = ({ products }: ProductsProps) => {
  const renderProducts = () => {
    if (!products.length) {
      return (
        <Typography size="medium" fontWeight={500}>
          A lista de produtos está vazia
        </Typography>
      );
    } else {
      return products.map((product) => <ProductCard key={product.id} {...product} />);
    }
  };

  return <Container>{renderProducts()}</Container>;
};

export default Products;
