import { useParams } from "react-router-dom";
import products from "../mock-data/products";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  return (
    <main className="mx-[4%] py-5 border-t border-[#e5e7eb]">
      <img src={product?.images[0]} alt={product?.name} />
      <img
        src={product?.images[0]}
        alt={product?.name}
        className="mt-4 mb-12.5 w-[22%]"
      />
      <h1 className="text-2xl font-medium mb-3">{product?.name}</h1>
      <p className="mb-6">{`(${product?.reviewCount})`}</p>
      <h2 className="text-3xl font-semibold mb-4.5">{`$${product?.price}`}</h2>
      <p className="text-[#6d7280]">{product?.shortDescription}</p>
    </main>
  );
};

export default ProductPage;
