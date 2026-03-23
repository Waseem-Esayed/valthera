import { Link } from "react-router-dom";

const ProductTemplate = (props: {
  imgSrc: string;
  title: string;
  price: number;
  category: string;
  type?: string;
}) => {
  const { imgSrc, title, price, category, type } = props;

  return (
    <Link to="" className="w-full flex flex-col h-fit gap-y-1">
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
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
      <span>{category}</span>
      <span>{type}</span>
    </Link>
  );
};

export default ProductTemplate;
