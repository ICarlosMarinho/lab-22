import { useContext, useEffect, useState } from "react";
import Cart from "../../components/Cart";
import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { getProducts } from "../../services";
import { ProductsContext } from "../../states/ProductsProvider";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts()
      .then((result) => setProducts(result))
      .catch(console.log);
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <Products products={products} />
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
