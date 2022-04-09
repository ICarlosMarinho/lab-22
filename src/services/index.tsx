import axios from "axios";

export const messages = {
  error: {
    system: "Um erro inesperado ocorreu, verifique sua conexão ou entre em contato com o suporte"
  }
};

export const getProducts = () => {
  return axios
    .get<Product[]>(`${process.env.REACT_APP_API_URL}/products`)
    .then(({ data }) => data)
    .catch((_error) => {
      throw new Error(messages.error.system);
    });
};
