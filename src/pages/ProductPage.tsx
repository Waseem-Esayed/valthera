import { useParams } from "react-router-dom";
import products from "../mock-data/products";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <main className="mx-[4%] py-5 border-t border-[#e5e7eb]">
      <img src={product?.images[0]} alt={product?.name} />
      <img
        src={product?.images[0]}
        alt={product?.name}
        className="mt-3.5 mb-12.5 w-[22%]"
      />
      <h1 className="text-2xl font-medium mb-2.5">{product?.name}</h1>
      <p className="mb-6">{`(${product?.reviewCount})`}</p>
      <h2 className="text-3xl font-medium mb-4.5">{`$${product?.price}`}</h2>
      <p className="text-[#6d7280] mb-7">{product?.shortDescription}</p>
      <p className="mb-4">Select Size</p>
      <div className="flex gap-2 mb-7.5">
        {product?.availableSizes.map((size, i) => (
          <button
            key={i}
            value={size}
            onClick={(e) => setSelectedSize(e.currentTarget.value)}
            className={`bg-gray-100 py-2 px-4 border ${selectedSize === size ? "border-[#f97316]" : "border-[#e5e7eb]"} cursor-pointer`}>
            {size}
          </button>
        ))}
      </div>
      <button className="mb-12.5 uppercase text-white bg-black text-sm px-8 py-3 tracking-wide border border-[#e5e7eb]">
        add to cart
      </button>
      {product?.features?.map((feature, i) => (
        <p key={i} className="text-sm text-[#6d7280]">
          {feature}
        </p>
      ))}
      <div className="mt-17">
        <button className="text-sm border border-[#e5e7eb] px-5 py-3 font-semibold">
          Description
        </button>
        <button className="text-sm border border-[#e5e7eb] px-5 py-3">{`Reviews (${product?.reviewCount})`}</button>
      </div>
      <div className="text-sm text-[#6d7280] border border-[#e5e7eb] px-6 py-6">
        {product?.longDescription}
      </div>
    </main>
  );
};

export default ProductPage;
