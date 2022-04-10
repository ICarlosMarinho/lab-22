import { Container } from "./Products.styles";
import { ProductsProps } from "./Products.model";
import Product from "../Product";
import Typography from "../Typography";

const Products = ({ products }: ProductsProps) => {
  const renderProducts = () => {
    if (!products.length) {
      return <Typography fontWeight={600}>A lista de produtos está vazia</Typography>;
    } else {
      return products.map((product) => <Product key={product.id} {...product} />);
    }
  };

  return <Container>{renderProducts()}</Container>;
};

export default Products;
