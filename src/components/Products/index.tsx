import { Container } from "./Products.styles";
import { ProductsProps } from "./Products.model";
import Product from "../Product";

const Products = ({ products }: ProductsProps) => {
  const renderProducts = () => {
    if (!products.length) {
      return <h3>A lista de produtos está vazia</h3>;
    } else {
      return products.map((product) => <Product key={product.id} {...product} />);
    }
  };

  return <Container>{renderProducts()}</Container>;
};

export default Products;
