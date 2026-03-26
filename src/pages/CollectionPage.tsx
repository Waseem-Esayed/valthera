import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBarContext } from "../context/SearchBarContext";
import { useSelector } from "react-redux";
import filterFunction from "../utils/filterFunction";
import FilterBox from "../components/ui/FilterCategory";
import ProductTemplate from "../components/ui/ProductTemplate";
import SearchBar from "../components/ui/SearchBar";
import type ProductType from "../types/Product";
import carretRightIcon from "../assets/images/carret-right.svg";
import carretDownIcon from "../assets/images/carret-down.svg";

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const { visibleSearchBar } = useContext(SearchBarContext);
  const filterCategories = searchParams.get("categories")?.split(",") ?? [];
  const filterType = searchParams.get("type")?.split(",") ?? [];
  const filterBestseller = searchParams.get("bestseller")?.split(",") ?? [];
  const products = useSelector((state) => state.products);
  const initialProducts = products;
  const [sortKey, setSortKey] = useState("high-to-low");
  const sortedProducts = [...initialProducts].sort((a, b) => {
    return sortKey === "high-to-low" ? b.price - a.price : a.price - b.price;
  });
  const [filterBoxManager, setFilterBoxManager] = useState([
    carretRightIcon,
    "w-2.5",
    "hidden",
  ]);

  function handleSwitchArrow() {
    if (filterBoxManager[0] === carretRightIcon) {
      setFilterBoxManager([carretDownIcon, "h-2.5", "block"]);
    } else {
      setFilterBoxManager([carretRightIcon, "w-2.5", "hidden"]);
    }
  }

  type FilterRecord = Record<FilterKey, string[]>;
  type FilterKey = "category" | "subCategory" | "bestseller";

  const filterAll: FilterRecord = {
    category: filterCategories,
    subCategory: filterType,
    bestseller: filterBestseller,
  };

  let filteredArary: ProductType[] = sortedProducts;

  Object.entries(filterAll).forEach(([key, filter]) => {
    filteredArary = [...filterFunction(filter, filteredArary, key)];
  });

  return (
    <main
      className={`mx-[4%] ${!visibleSearchBar && "py-11 border-t border-[#e5e7eb]"}`}>
      {visibleSearchBar && <SearchBar />}
      <div className="flex flex-col">
        <h4
          className={`uppercase text-xl ${filterBoxManager[0] === carretRightIcon ? "mb-1.5" : "mb-4"}`}>
          <button
            onClick={() => handleSwitchArrow()}
            className="uppercase flex items-center gap-x-2.5">
            filters
            <img
              src={filterBoxManager[0]}
              alt=""
              className={filterBoxManager[1]}
            />
          </button>
        </h4>
        <div className={filterBoxManager[2]}>
          <FilterBox type="categories" options={["men", "women", "kids"]} />
          <FilterBox
            type="type"
            options={["topwear", "bottomwear", "winterwear"]}
          />
          <FilterBox type="bestseller" options={["bestseller"]} />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex-[0.8425]">
          <div className="flex justify-between items-center gap-5 mb-5">
            <div className="flex items-center">
              <h3 className="text-base uppercase text-[#6b7280] font-medium flex justify-center items-center tracking-wide">
                all
                <span className="text-[#374151] ml-2 text-wrap">
                  collections
                </span>
              </h3>
              <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
            </div>

            <select
              name="sort"
              className="border-2 border-[#d1d5db] px-3 py-2.5 text-sm"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}>
              <option value="low-to-high">Sort by: Low to High</option>
              <option value="high-to-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-7">
            {filteredArary.map((p) => {
              return (
                <ProductTemplate
                  key={p.id}
                  title={p.name}
                  imgSrc={p.images[0]}
                  price={p.price}
                  id={p.id}
                  inStock={p.inStock}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
