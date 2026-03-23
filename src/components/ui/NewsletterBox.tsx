const NewsletterBox = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-3.5 mt-5">
      <h5 className="text-2xl text-[#1f2937] font-medium">
        Subscribe now & get 20% off
      </h5>
      <p className="text-[#9ca3af] font-semibold mb-2.5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form action="/subscribe" className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-140 placeholder:text-[#9ca3af] outline-none border border-r-0 border-[#e5e7eb] px-3 py-3"
        />
        <button
          type="submit"
          className="uppercase text-white bg-black text-xs px-8 tracking-widest border border-[#e5e7eb]">
          subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
