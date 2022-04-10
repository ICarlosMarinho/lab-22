import { Dispatch, SetStateAction } from "react";

export interface IncrementorProps {
  id: string;
  selectedQuantity: number;
  setSelectedQuantity: Dispatch<SetStateAction<number>>;
}
