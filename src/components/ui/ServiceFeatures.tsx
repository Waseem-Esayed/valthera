import Feature from "./Feature";
import exchangeIcon from "../../assets/images/exchange-icon.svg";
import qualityIcon from "../../assets/images/quality-icon.svg";
import headsetIcon from "../../assets/images/headset-icon.svg";

const ServiceFeatures = () => {
  return (
    <section className="flex justify-around flex-wrap gap-y-13 mt-7.5">
      <Feature
        title="easy exchange policy"
        description="We offer hassle free exchange policy"
        imgSrc={exchangeIcon}
      />
      <Feature
        title="7 days return policy"
        description="We provide 7 days free return policy"
        imgSrc={qualityIcon}
      />
      <Feature
        title="best customer support"
        description="We provide 24/7 customer support"
        imgSrc={headsetIcon}
      />
    </section>
  );
};

export default ServiceFeatures;
