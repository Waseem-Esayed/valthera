import heroImg from "../../assets/images/hero-img.png";

const HomePageHeroSection = () => {
  return (
    <section className="border border-[#9ca3af] aspect-2.5/1 flex flex-col justify-between">
      <div className="flex justify-center items-center w-full py-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center">
            <hr className="w-9 border-[#414141] mr-3 border-[1.35px] rounded-full" />
            <p className="text-md text-[#414141] uppercase text-sm">
              our bestsellers
            </p>
          </div>
          <h2 className="font-prata text-[#414141] font-black tracking-wide capitalize text-3xl">
            latest arrivals
          </h2>
          <div className="flex items-center">
            <p className="text-md font-semibold text-[#414141] uppercase text-sm">
              shop now
            </p>
            <hr className="w-9 border-[#414141] ml-3 rounded-full" />
          </div>
        </div>
      </div>
      <img src={heroImg} alt="Hero Img" />
    </section>
  );
};

export default HomePageHeroSection;
