import axios from "axios";
import { Product } from "../common/productType";

export const messages = {
  error: {
    system: "Um erro inesperado ocorreu, verifique sua conexão ou entre em contato com o suporte"
  }
};

export const getProducts = () => {
  return axios
    .get<Product[]>("http://localhost:3001/products")
    .then(({ data }) => data)
    .catch((_error) => {
      throw new Error(messages.error.system);
    });
};
