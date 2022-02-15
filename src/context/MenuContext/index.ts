import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface MenuContextInterface {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const MenuContext = createContext<MenuContextInterface>({
  open: false,
  setOpen: () => {},
});

export default MenuContext;
