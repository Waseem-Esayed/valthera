import { useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../../context/SearchBarContext";
import searchIcon from "../../assets/images/search-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";

const SearchBar = () => {
  const { setVisibleSearchBar } = useContext(SearchBarContext);
  const { setSearchBarValue } = useContext(SearchBarContext);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchBarValue(debouncedSearchValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  });

  return (
    <div className="mb-10 bg-[#f9fafb] flex justify-center items-center gap-3.5 py-5 border-y border-[#e5e7eb]">
      <div className="relative w-[77%]">
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm border border-[#9ca3af] rounded-full px-5 py-2 w-full"
          onChange={(e) => setDebouncedSearchValue(e.currentTarget.value)}
        />
        <img
          src={searchIcon}
          className="h-4 absolute right-4 top-[50%] -translate-y-[50%]"
        />
      </div>
      <button
        onClick={() => setVisibleSearchBar(false)}
        className="cursor-pointer">
        <img src={closeIcon} alt="Close" className="w-3" />
      </button>
    </div>
  );
};

export default SearchBar;
