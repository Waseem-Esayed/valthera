import { Link } from "react-router-dom";

const ProductTemplate = (props: {
  imgSrc: string;
  title: string;
  price: number;
}) => {
  const { imgSrc, title, price } = props;

  return (
    <Link to="" className="w-full flex flex-col h-fit gap-y-1">
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
    </Link>
  );
};

export default ProductTemplate;
