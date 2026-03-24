import type FeatureType from "../../types/Feature";

const Feature = ({ title, description, imgSrc }: FeatureType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgSrc} alt={title} className="w-11 mb-5.5" />
      <h4 className="text-[#374151] font-semibold capitalize">{title}</h4>
      <p className="text-[#9ca3af] font-medium">{description}</p>
    </div>
  );
};

export default Feature;
