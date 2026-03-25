import type FeatureType from "../../types/Feature";

const Feature = ({ title, description, imgSrc }: FeatureType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgSrc} alt={title} className="w-9 mb-5.5" />
      <p className="text-[#374151] font-semibold capitalize">{title}</p>
      <p className="text-[#9ca3af] text-sm font-medium">{description}</p>
    </div>
  );
};

export default Feature;
