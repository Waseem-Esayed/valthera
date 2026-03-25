import { useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import type ProductType from "../../types/Product";
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
    }, 200);
  }, [filteredProducts]);

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="flex items-center">
        <h3 className="text-3xl text-center uppercase text-[#6b7280] font-medium flex justify-center items-center tracking-wide flex-wrap">
          {`${sectionTitleFirstPart} `}
          <span className="text-[#374151] ml-2 text-wrap">
            {sectionTitleSecondPart}
          </span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>
      <p className="text-sm text-[#4b5563] mb-4 text-center w-[75%]">
        {sectionDescription}
      </p>

      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-7">
        {!loading &&
          products.map((p, i) => {
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
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-7">
        {loading &&
          Array.from({ length: 10 }).map((_, i) => {
            return <SkeletonProduct key={i} />;
          })}
      </div>
    </section>
  );
};

export default HomePageSectionTemplate;
