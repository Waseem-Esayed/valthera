import heroImg from "../../assets/images/hero-img.png";

const HomePageHeroSection = () => {
  return (
    <section className="border border-[#9ca3af] aspect-2.5/1 flex">
      <div className="flex-[0.5] flex justify-center items-center">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center">
            <hr className="w-11 border-[1.35px] border-[#414141] mr-3" />
            <p className="text-md font-sfemibold text-[#414141] uppercase">
              our bestsellers
            </p>
          </div>
          <h2 className="font-prata text-[#414141] text-5xl font-black tracking-wide capitalize">
            latest arrivals
          </h2>
          <div className="flex items-center">
            <p className="text-md font-semibold text-[#414141] uppercase">
              shop now
            </p>
            <hr className="w-11 border-[#414141] ml-3" />
          </div>
        </div>
      </div>
      <img src={heroImg} alt="Hero Img" className="flex-[0.5]" />
    </section>
  );
};

export default HomePageHeroSection;
