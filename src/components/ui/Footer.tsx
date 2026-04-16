import ResourceNavigation from "./ResourceNavigation";
import brandLogo from "../../assets/images/brand-logo.svg";

const Footer = () => {
  return (
    <footer className=" mx-[5%] pb-6 pt-35">
      <div className="flex flex-col justify-between gap-x-10 gap-y-10 sm:flex-row">
        <div className="flex flex-col gap-4 sm:flex-[0.45]">
          <img src={brandLogo} alt="Valthera" className="w-48" />
          <p className="text-[#4b5563] text-sm text-wrap max-w-[95%]">
            Welcome to Valthera, a modern e-commerce interface built to explore
            React, TypeScript, and state management. This project focuses on a
            clean user experience, responsive design, and seamless navigation.
            Browse through our demo products and test the cart functionality!
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-x-[25%] gap-y-14 sm:flex-[0.55] sm:gap-x-[30%]">
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
      <hr className="border border-[#e5e7eb] mt-10 mb-5" />
      <p className="text-sm text-center">
        Copyright 2026@ Valthera - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
