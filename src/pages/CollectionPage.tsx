import { useSelector } from "react-redux";
import FilterBox from "../components/ui/FilterCategory";
import ProductTemplate from "../components/ui/ProductTemplate";
import type productType from "../types/product";

const CollectionPage = () => {
  const allCollections = useSelector((state) => state.products);

  return (
    <main className="mx-[9%] border-t border-[#e5e7eb] pt-10 flex  gap-10">
      <div className="flex-[0.1575] flex flex-col gap-5">
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
        <div className="flex justify-between items-center flex-wrap gap-5 mb-5">
          <h3 className="text-2xl font-medium flex items-center tracking-wide">
            <span className="text-[#6b7280] uppercase">all</span>
            <span className="text-[#374151] ml-2 uppercase">collections</span>
            <hr className="w-11 ml-2.5 border-[1.35px] border-[#374151]" />
          </h3>
          <select
            name="sort"
            id="sort"
            className="border-2 border-[#d1d5db] px-3 py-2.5 text-sm">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-7">
          {allCollections.map((p: productType, i: number) => {
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
