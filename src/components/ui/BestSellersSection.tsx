import HomePageSectionTemplate from "./HomePageSectionTemplate";
import type ProductType from "../../types/Product";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const BestSellerSection = () => {
  const bestSellerProducts = useSelector(
    (state: RootState) => state.products,
  ).filter((p: ProductType) => p.bestseller);

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
