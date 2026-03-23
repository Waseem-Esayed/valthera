import FilterBox from "../components/ui/FilterCategory";
import ProductTemplate from "../components/ui/ProductTemplate";
import type ProductType from "../types/product";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../mock-data/products";

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const filterCategories = searchParams.get("categories")?.split(",") ?? [];
  const initialProducts = products;
  const [sortKey, setSortKey] = useState("high-to-low");
  const sortedProducts = [...initialProducts].sort((a, b) => {
    return sortKey === "high-to-low" ? b.price - a.price : a.price - b.price;
  });

  let sortedArray = [] as ProductType[];

  if (filterCategories.length > 0) {
    filterCategories.forEach((cat) => {
      const holderArray = sortedProducts.filter((product) => {
        return product.category.toLowerCase() === cat;
      });
      sortedArray.push(...holderArray);
    });
  } else {
    sortedArray = [...sortedProducts];
  }

  console.log(sortedArray);

  return (
    <main className="mx-[9%] border-t border-[#e5e7eb] pt-10 flex  gap-10">
      <div className="flex-[0.1575] flex flex-col gap-8">
        <h4 className="uppercase text-xl flex flex-col gap-y-10 mb-1">
          filters
        </h4>
        <FilterBox type="categories" options={["men", "women", "kids"]} />
        <FilterBox
          type="type"
          options={["topwear", "bottomwear", "winterwear"]}
        />
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
            {/* <option value="relavent">Sort by: Relavent</option> */}
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-7">
          {sortedArray.map((p, i) => {
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
    </main>
  );
};

export default CollectionPage;
