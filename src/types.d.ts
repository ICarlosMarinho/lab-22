type WithChildren<T = {}> = T & { children?: React.ReactNode | string };

interface Product {
  id: string;
  name: string;
  picture: string;
  quantity: number;
  price: number;
}
