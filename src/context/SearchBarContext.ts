import { createContext } from "react";

type SerachBarType = {
  visibleSearchBar: boolean;
  setVisibleSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBarContext = createContext<SerachBarType>({visibleSearchBar: false,
  setVisibleSearchBar: () => {}});
