import heroImg from "../../assets/images/hero-img.png";

const HomePageHeroSection = () => {
  return (
    <section className="border border-[#9ca3af] flex flex-col min-[650px]:flex-row justify-between">
      <div className="flex justify-center items-center py-10 min-[650px]:w-[50%]">
        <div className="flex flex-col gap-y-2 lg:gap-y-5">
          <div className="flex items-center justify-center">
            <hr className="w-9 border-[#414141] mr-3 border-[1.35px] rounded-full" />
            <p className="text-md text-[#414141] uppercase text-sm md:text-base lg:text-lg">
              our bestsellers
            </p>
          </div>
          <h2 className="font-prata text-[#414141] font-black tracking-wide capitalize text-3xl md:text-4xl  lg:text-5xl">
            latest arrivals
          </h2>
          <div className="flex items-center">
            <p className="font-semibold text-[#414141] uppercase text-sm md:text-base lg:text-lg">
              shop now
            </p>
            <hr className="w-9 border-[#414141] ml-3 rounded-full" />
          </div>
        </div>
      </div>
      <img src={heroImg} alt="Hero Img" className="min-[650px]:w-[50%]" />
    </section>
  );
};

export default HomePageHeroSection;
