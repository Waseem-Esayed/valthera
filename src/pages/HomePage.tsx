import BestSellersSection from "../components/ui/BestSellersSection";
import HomePageHeroSection from "../components/ui/HomePageHeroSection";
import LatestCollectionsSection from "../components/ui/LatestCollectionsSection";
import NewsletterBox from "../components/ui/NewsletterBox";
import ServiceFeatures from "../components/ui/ServiceFeatures";

const HomePage = () => {
  return (
    <>
      <main className="mx-[9%] flex flex-col gap-17">
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
