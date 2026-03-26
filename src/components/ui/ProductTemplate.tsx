import { Link } from "react-router-dom";

const ProductTemplate = (props: {
  imgSrc: string;
  title: string;
  price: number;
  id: number;
  inStock: number;
}) => {
  const { imgSrc, title, price, id, inStock } = props;

  return (
    <Link to={`/product/${id}`} className="w-full flex flex-col h-fit gap-y-1">
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="hover:scale-[1.2] duration-300"
        />
      </div>
      <p className="text-[#374151] text-sm font-semibold mt-2 wrap-break-word">
        {title}
      </p>
      <p className="text-[#374151] text-sm font-bold">
        {"$"}
        {price}
      </p>
      <p>{inStock}</p>
    </Link>
  );
};

export default ProductTemplate;
