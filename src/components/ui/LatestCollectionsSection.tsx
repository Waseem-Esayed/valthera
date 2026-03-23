import HomePageSectionTemplate from "./HomePageSectionTemplate";
import { useSelector } from "react-redux";

const LatestCollectionsSection = () => {
  const top10LatestCollections = useSelector((state) => state.products).slice(
    -10,
  );

  return (
    <HomePageSectionTemplate
      sectionTitleFirstPart="latest"
      sectionTitleSecondPart="collections"
      sectionDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
      filteredProducts={top10LatestCollections}
    />
  );
};

export default LatestCollectionsSection;
