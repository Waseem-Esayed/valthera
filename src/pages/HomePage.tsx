import BestSellersSection from "../components/ui/BestSellersSection";
import HomePageHeroSection from "../components/ui/HomePageHeroSection";
import LatestCollectionsSection from "../components/ui/LatestCollectionsSection";
import NewsletterBox from "../components/ui/NewsletterBox";
import ServiceFeatures from "../components/ui/ServiceFeatures";

const HomePage = () => {
  return (
    <>
      <main className="mx-[4%] flex flex-col gap-13.5">
        <HomePageHeroSection />
        <LatestCollectionsSection />
        <BestSellersSection />
        <ServiceFeatures />
        <NewsletterBox />
      </main>
    </>
  );
};

export default HomePage;
