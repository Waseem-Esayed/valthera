const ContactPage = () => {
  return (
    <main className="mx-[4%] border-t border-[#e5e7eb]">
      <div className="flex justify-center items-center mt-8 mb-13">
        <h3 className="text-2xl text-center uppercase text-[#6b7280] flex justify-center items-center tracking-wide flex-wrap">
          contact
          <span className="text-[#374151] font-medium ml-2 text-wrap">us</span>
        </h3>
        <hr className="w-9 ml-2.5 border-[0.5] border-[#374151]" />
      </div>
      <img
        src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png"
        alt=""
        className="mb-10"
      />
      <h2 className="text-xl text-[#4b5563] font-semibold mb-5">Our Store</h2>
      <p className="text-[#6b7280]">54709 Willms Station</p>
      <p className="text-[#6b7280]">Suite 350, Washington, USA</p>
      <br />
      <p className="text-[#6b7280]">Tel: (415) 555-0132</p>
      <p className="text-[#6b7280]">Email: admin@forever.com</p>
      <h2 className="text-xl text-[#4b5563] font-semibold mt-7 mb-5">
        Careers at Valthera
      </h2>
      <p className="text-[#6b7280]">
        Learn more about our teams and job openings
      </p>
      <button className="mt-6 mb-0 border px-7 py-3.5 text-sm">
        Explore Jobs
      </button>
    </main>
  );
};

export default ContactPage;
