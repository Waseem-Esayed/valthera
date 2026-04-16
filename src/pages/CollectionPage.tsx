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
import type { RootState } from "../app/store";

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const { visibleSearchBar } = useContext(SearchBarContext);
  const { searchBarValue } = useContext(SearchBarContext);
  const filterCategories = searchParams.get("categories")?.split(",") ?? [];
  const filterType = searchParams.get("type")?.split(",") ?? [];
  const filterBestseller = searchParams.get("bestseller")?.split(",") ?? [];
  const products = useSelector((state: RootState) => state.products);
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

  let filteredArray: ProductType[] = sortedProducts.filter((p) => {
    let tempName = p.name.toLowerCase();
    const searchChars = searchBarValue.toLowerCase().split("");

    return searchChars.every((char) => {
      if (tempName.includes(char)) {
        tempName = tempName.replace(char, "");
        return true;
      }
      return false;
    });
  });

  Object.entries(filterAll).forEach(([key, filter]) => {
    filteredArray = [...filterFunction(filter, filteredArray, key)];
  });

  return (
    <>
      {visibleSearchBar && <SearchBar />}
      <main
        className={`mx-[4%] ${!visibleSearchBar && "py-11 border-t border-[#e5e7eb]"} flex flex-col min-[650px]:flex-row min-[650px]:gap-x-10`}>
        <div className="flex flex-col min-[650px]:w-[20%] min-[650px]:min-w-35 min-[650px]:mt-2 h-fit">
          <h4
            className={`uppercase text-xl ${filterBoxManager[0] === carretRightIcon ? "mb-1.5" : "mb-4"}`}>
            <button
              onClick={() => {
                if (window.innerWidth < 650) {
                  handleSwitchArrow();
                }
              }}
              className="cursor-pointer min-[650px]:cursor-default min-[650px]:mb-4 uppercase flex justify-center items-center gap-x-2.5">
              filters
              <img
                src={filterBoxManager[0]}
                alt=""
                className={`${filterBoxManager[1]} min-[650px]:hidden`}
              />
            </button>
          </h4>
          <div className={`${filterBoxManager[2]} min-[650px]:block`}>
            <FilterBox type="categories" options={["men", "women", "kids"]} />
            <FilterBox
              type="type"
              options={["topwear", "bottomwear", "winterwear"]}
            />
            <FilterBox type="bestseller" options={["bestseller"]} />
          </div>
        </div>
        <div className="flex flex-col gap-10 min-[650px]:w-[80%]">
          <div className="flex-[0.8425]">
            <div className="flex justify-between items-center flex-wrap gap-5 mb-5">
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
            <div className="grid wrap-anywhere grid-cols-2 min-[650px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-7">
              {filteredArray.length > 0 &&
                filteredArray.map((p) => {
                  return (
                    <ProductTemplate
                      key={p.id}
                      title={p.name}
                      imgSrc={p.images[0]}
                      price={p.price}
                      id={p.id}
                    />
                  );
                })}
            </div>
            {filteredArray.length === 0 && (
              <>
                <p className="mt-3 mb-1.5">
                  No results for "<strong>{searchBarValue}</strong>"
                </p>
                <p className="text-sm">
                  Check your spelling or try searching for something less
                  specific.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default CollectionPage;
