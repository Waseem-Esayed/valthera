import { useContext } from "react";
import { SearchBarContext } from "../../context/SearchBarContext";
import searchIcon from "../../assets/images/search-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";

const SearchBar = () => {
  const { setVisibleSearchBar } = useContext(SearchBarContext);

  return (
    <div className="mb-10 bg-[#f9fafb] flex justify-center items-center gap-3 py-5 border-t border-[#e5e7eb]">
      <div className="relative w-[50%]">
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm border border-[#9ca3af] rounded-full px-5 py-2 w-full"
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
