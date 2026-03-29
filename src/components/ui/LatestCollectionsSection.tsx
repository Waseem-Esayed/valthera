import HomePageSectionTemplate from "./HomePageSectionTemplate";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const LatestCollectionsSection = () => {
  const top10LatestCollections = useSelector(
    (state: RootState) => state.products,
  ).slice(-10);

  return (
    <HomePageSectionTemplate
      sectionTitleFirstPart="latest"
      sectionTitleSecondPart="collections"
      sectionDescription="Fresh arrivals, refined designs. Explore our newest pieces, where modern aesthetics meet high-quality craftsmanship."
      filteredProducts={top10LatestCollections}
    />
  );
};

export default LatestCollectionsSection;
