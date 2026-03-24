import { useState, useContext } from "react";

const SearchBar = () => {
  const [visibleSearchBar, setVisibleSearchbar] = useState(false);

  return (
    <div className="mb-10 bg-[#f9fafb] flex justify-center items-center py-5 border-t border-[#e5e7eb]">
      <input type="text" placeholder="Search" className="outline-none" />
    </div>
  );
};

export default SearchBar;
