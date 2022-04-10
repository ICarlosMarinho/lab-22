import { CloseOutline } from "@styled-icons/evaicons-outline";
import Button from "../Button";
import { Container, Subtotal, Header } from "./Cart.styles";
import { CartProps } from "./Cart.model";

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

const MenuPayment = ({ isOpen, setIsOpen }: CartProps) => (
  <Container isOpen={isOpen}>
    <Header>
      <h3>Produtos no carrinho</h3>
      <CloseOutline onClick={() => setIsOpen(false)} />
    </Header>

    <Subtotal>
      <h3>Total</h3>
      <h3>1,600.50</h3>
    </Subtotal>

    <Button>Finalizar compra</Button>
  </Container>
);

export default MenuPayment;
