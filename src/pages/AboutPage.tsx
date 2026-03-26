import BrandFeature from "../components/ui/BrandFeature";
import NewsletterBox from "../components/ui/NewsletterBox";

const AboutPage = () => {
  return (
    <main className="mx-[4%] border-t border-[#e5e7eb]">
      <div className="flex justify-center items-center mt-8 mb-13">
        <h3 className="text-2xl text-center uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
          about
          <span className="text-[#374151] font-medium ml-2 text-wrap">us</span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>
      <img
        src="https://foreverbuy.in/assets/about_img-BAJyTXw9.png"
        alt=""
        className="mb-15"
      />
      <p className="text-[#4b5563]">
        Forever was born out of a passion for innovation and a desire to
        revolutionize the way people shop online. Our journey began with a
        simple idea: to provide a platform where customers can easily discover,
        explore, and purchase a wide range of products from the comfort of their
        homes. <br /> <br /> Since our inception, we've worked tirelessly to
        curate a diverse selection of high-quality products that cater to every
        taste and preference. From fashion and beauty to electronics and home
        essentials, we offer an extensive collection sourced from trusted brands
        and suppliers.
      </p>
      <p className="font-semibold my-6">Our Mission</p>
      <p className="text-[#4b5563]">
        Our mission at Forever is to empower customers with choice, convenience,
        and confidence. We're dedicated to providing a seamless shopping
        experience that exceeds expectations, from browsing and ordering to
        delivery and beyond.
      </p>
      <div className="flex items-center mt-8 mb-13">
        <h3 className="text-xl uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
          why
          <span className="text-[#374151] font-medium ml-2 text-wrap">
            choose us
          </span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>
      <div>
        <BrandFeature
          title="Quality Assurance:"
          description="We meticulously select and vet each product to ensure it meets our stringent quality standards."
          borderTop={true}
        />
        <BrandFeature
          title="Convenience:"
          description="With our user-friendly interface and hassle-free ordering process, shopping has never been easier."
          borderTop={false}
        />
        <BrandFeature
          title="Exceptional Customer Service:"
          description="Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority."
          borderTop={false}
        />
      </div>
      <NewsletterBox />
    </main>
  );
};

export default AboutPage;
