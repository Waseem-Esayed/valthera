import { useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import type ProductType from "../../types/product";
import SkeletonProduct from "./SkeletonProduct";

type HomePageSectionTemplateType = {
  sectionTitleFirstPart: string;
  sectionTitleSecondPart: string;
  sectionDescription: string;
  filteredProducts: ProductType[];
};

const HomePageSectionTemplate = ({
  sectionTitleFirstPart,
  sectionTitleSecondPart,
  sectionDescription,
  filteredProducts,
}: HomePageSectionTemplateType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 3000);
  }, [filteredProducts]);

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h3 className="text-3xl font-medium flex items-center tracking-wide">
        <span className="text-[#6b7280] uppercase">
          {sectionTitleFirstPart}
        </span>
        <span className="text-[#374151] ml-2 uppercase">
          {sectionTitleSecondPart}
        </span>
        <hr className="w-11 ml-2.5 border-[1.35px] border-[#374151]" />
      </h3>
      <p className="text-[#4b5563] font-semibold mb-4">{sectionDescription}</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-7">
        {!loading &&
          products.map((p, i) => {
            return (
              <ProductTemplate
                key={i}
                title={p.name}
                imgSrc={p.images[0]}
                price={p.price}
                category={p.category}
                type={p.subCategory}
              />
            );
          })}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {loading &&
          Array.from({ length: 10 }).map((_, i) => {
            return <SkeletonProduct key={i} />;
          })}
      </div>
    </section>
  );
};

export default HomePageSectionTemplate;
