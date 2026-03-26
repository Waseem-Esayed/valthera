const BrandFeature = ({
  title,
  description,
  borderTop,
}: {
  title: string;
  description: string;
  borderTop: boolean;
}) => {
  return (
    <div
      className={`${borderTop ? "border border-[#e5e7eb]" : "border-x border-b border-x-[#e5e7eb] border-b-[#e5e7eb]"} px-9 py-7`}>
      <p className="text-sm font-semibold mb-5">{title}</p>
      <p className="text-sm text-[#4b5563] ">{description}</p>
    </div>
  );
};

export default BrandFeature;
