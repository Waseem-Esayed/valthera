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
      sectionDescription="Tried, tested, and loved. Discover the products that define the Valthera experience."
      filteredProducts={bestSellerProducts}
    />
  );
};

export default BestSellerSection;
