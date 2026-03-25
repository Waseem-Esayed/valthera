import { createContext } from "react";

type HamburgerMenuType = {
  setVisibleHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HamburgerMenuContext = createContext<HamburgerMenuType>({
  setVisibleHamburgerMenu: () => {},
});
