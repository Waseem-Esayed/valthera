import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type ProductType from "../types/Product";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import type { RootState } from "../app/store";

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products);
  const product = products.find((p: ProductType) => p.id === Number(id));
  const { cart, addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  function handleAddToCart(product: ProductType) {
    if (selectedSize) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        size: selectedSize,
        amount: 1,
        inStock: product.inStock,
      });
    }
  }

  const amountInCart = cart
    .filter((p) => p.id === Number(id))
    .reduce((acc, curr) => acc + curr.amount, 0);

  const isOutOfStock = product ? amountInCart >= product.inStock : false;

  return (
    <main className="mx-[4%] pt-10 pb-5 border-t border-[#e5e7eb]">
      {/* <img src={product?.images[0]} alt={product?.name} /> */}
      <img
        src={product?.images[0]}
        alt={product?.name}
        className="mt-3.5 mb-12.5 w-[22%]"
      />
      <h1 className="text-2xl font-medium mb-2.5">{product?.name}</h1>
      <p className="mb-6">{`(${product?.reviewCount})`}</p>
      <h2 className="text-3xl font-medium mb-4.5">{`$${product?.price}`}</h2>
      <p className="text-[#6d7280] mb-7">{product?.shortDescription}</p>
      <p className="mb-3.5">Select Size</p>
      <div className="flex gap-2 mb-7.5">
        {product?.availableSizes.map((size: string, i: number) => (
          <button
            key={i}
            value={size}
            onClick={(e) => setSelectedSize(e.currentTarget.value)}
            disabled={isOutOfStock}
            className={`bg-gray-100 py-2 px-4 border disabled:border-[#e5e7eb] disabled:cursor-default ${selectedSize === size ? "border-[#f97316]" : "border-[#e5e7eb]"} cursor-pointer`}>
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={() => product && handleAddToCart(product)}
        disabled={isOutOfStock}
        className="uppercase text-white bg-black disabled:bg-gray-700 disabled:cursor-default text-sm px-8 py-3 tracking-wide border border-[#e5e7eb] cursor-pointer">
        add to cart
      </button>
      {isOutOfStock && (
        <p className="text-xs text-red-600 capitalize mt-2">
          not enough in stock
        </p>
      )}
      <hr className="border-[#e5e7eb] mt-9 mb-7" />
      {product?.features?.map((feature, i) => (
        <p key={i} className="text-sm text-[#6d7280] mb-1">
          {"- "}
          {feature}
        </p>
      ))}
      <div className="mt-17 grid grid-cols-3">
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
