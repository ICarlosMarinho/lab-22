import { Product } from "../common/productType";

export const asCurrency = (price: number) => {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

export const moveProduct = (source: Product[], destination: Product[], id: string) => {
  const product = source.find((item) => item.id === id) as Product;
  const updatedSource = source.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
    }

    return { ...item };
  });
  const updatedDestination = exists(destination, id)
    ? destination.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return { ...item };
      })
    : [...destination, { ...product, quantity: 1 }];

  return {
    updatedSource,
    updatedDestination
  };
};

export const exists = (array: Product[], id: string) => {
  return !!array.filter((item) => item.id === id).length;
};

export const limitReached = (storage: Product[], id: string) => {
  const product = storage.find((item) => item.id === id) as Product;

  return product.quantity < 1;
};
