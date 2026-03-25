const SkeletonProduct = () => {
  return (
    <div>
      <div className="animate-pulse delay-1000 grid bg-gray-300 rounded-md w-full aspect-[1/1.1] place-items-center mb-3.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 text-gray-500 mb-4 ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
        </svg>
      </div>
      <div className="max-w-full animate-pulse w-40 h-3.5 mb-3.5 bg-gray-300 rounded-xs">
        &nbsp;
      </div>
      <div className="max-w-full animate-pulse h-3.5 bg-gray-300 rounded-xs w-10">
        &nbsp;
      </div>
    </div>
  );
};

export default SkeletonProduct;
