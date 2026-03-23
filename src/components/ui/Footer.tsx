import ResourceNavigation from "./ResourceNavigation";
import brandLogo from "../../assets/images/brand-logo.svg";

const Footer = () => {
  return (
    <footer className="mx-[9%] pb-6 pt-40">
      <div className="flex justify-between flex-wrap gap-x-10 gap-y-10">
        <div className="flex-[0.39] flex flex-col gap-4">
          <img src={brandLogo} alt="Valthera" className="w-45" />
          <p className="text-[#4b5563] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-[0.5] justify-evenly flex-wrap gap-20">
          <ResourceNavigation
            resourceType="company"
            resources={[
              { title: "About", destination: "/about" },
              { title: "Features", destination: "/features" },
              { title: "Works", destination: "/works" },
              { title: "Career", destination: "/careeer" },
            ]}
          />
          <ResourceNavigation
            resourceType="help"
            resources={[
              { title: "Customer Suport", destination: "/customer-support" },
              { title: "Delivery Details", destination: "/delivery-details" },
              {
                title: "Terms & Conditions",
                destination: "/terms-and-conditions",
              },
              { title: "Privacy Policy", destination: "/privacy-policy" },
            ]}
          />
        </div>
      </div>
      <hr className="border-[#e5e7eb] mt-10 mb-5" />
      <p className="text-sm text-center">
        Copyright 2026@ Valthera - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
