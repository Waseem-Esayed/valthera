import HomePageSectionTemplate from "./HomePageSectionTemplate";
import type productType from "../../types/product";
import { useSelector } from "react-redux";

const BestSellerSection = () => {
  const bestSellerProducts = useSelector((state) => state.products).filter(
    (p: productType) => p.bestseller,
  );

  return (
    <HomePageSectionTemplate
      sectionTitleFirstPart="best"
      sectionTitleSecondPart="sellers"
      sectionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
      filteredProducts={bestSellerProducts}
    />
  );
};

export default BestSellerSection;
