import { Dispatch, SetStateAction } from "react";

export type CartProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
