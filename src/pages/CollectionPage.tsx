import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import filterFunction from "../utils/filterFunction";
import FilterBox from "../components/ui/FilterCategory";
import ProductTemplate from "../components/ui/ProductTemplate";
import SearchBar from "../components/ui/SearchBar";
import type ProductType from "../types/Product";
import products from "../mock-data/products";
import { SearchBarContext } from "../context/SearchBarContext";

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const { visibleSearchBar } = useContext(SearchBarContext);
  const filterCategories = searchParams.get("categories")?.split(",") ?? [];
  const filterType = searchParams.get("type")?.split(",") ?? [];
  const filterBestseller = searchParams.get("bestseller")?.split(",") ?? [];
  const initialProducts = products;
  const [sortKey, setSortKey] = useState("high-to-low");
  const sortedProducts = [...initialProducts].sort((a, b) => {
    return sortKey === "high-to-low" ? b.price - a.price : a.price - b.price;
  });

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
      className={`${!visibleSearchBar && "py-11 border-t border-[#e5e7eb]"}`}>
      {visibleSearchBar && <SearchBar />}
      <div className="flex gap-10">
        <div className="flex-[0.1575] flex flex-col gap-8 h-fit">
          <h4 className="uppercase text-xl flex flex-col gap-y-10 mb-1">
            filters
          </h4>
          <FilterBox type="categories" options={["men", "women", "kids"]} />
          <FilterBox
            type="type"
            options={["topwear", "bottomwear", "winterwear"]}
          />
          <FilterBox type="bestseller" options={["bestseller"]} />
        </div>
        <div className="flex-[0.8425]">
          <div className="flex justify-between items-start flex-wrap gap-5 mb-5">
            <h3 className="text-2xl font-medium flex items-center tracking-wide leading-7">
              <span className="text-[#6b7280] uppercase">all</span>
              <span className="text-[#374151] ml-2 uppercase">collections</span>
              <hr className="w-11 ml-2.5 border-[1.35px] border-[#374151]" />
            </h3>
            <select
              name="sort"
              className="border-2 border-[#d1d5db] px-3 py-2.5 text-sm"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}>
              <option value="low-to-high">Sort Price by: Low to High</option>
              <option value="high-to-low">Sort Price by: High to Low</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-7">
            {filteredArary.map((p, i) => {
              return (
                <ProductTemplate
                  key={i}
                  title={p.name}
                  imgSrc={p.images[0]}
                  price={p.price}
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
