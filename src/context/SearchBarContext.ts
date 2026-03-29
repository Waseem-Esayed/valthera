import { createContext } from "react";

type SearchBarType = {
  visibleSearchBar: boolean;
  setVisibleSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  searchBarValue: string;
  setSearchBarValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBarContext = createContext<SearchBarType>({
  visibleSearchBar: false,
  setVisibleSearchBar: () => {},
  searchBarValue: "",
  setSearchBarValue: () => {},
});
