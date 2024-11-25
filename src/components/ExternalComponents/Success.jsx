const Success = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 w-full max-w-sm mx-auto mt-16 shadow-lg relative rounded-lg overflow-hidden border-hidden">
        <div
          className="absolute inset-0 rounded-lg p-0.5"
          style={{
            background:
              "linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          <div className="bg-gray-900 h-full w-full rounded-lg"></div>
        </div>

        <div className="relative">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <svg
              className="w-12 h-12 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14 2 4" />
            </svg>
          </div>
          {/* Title */}
          <h2 className="text-[18px] font-robotoBold font-[700] leading-[21px] text-green-500 mb-2 text-center">
            SUCCESS
          </h2>
          {/* Description */}
          <p className="text-center text-[16px] font-[500] leading-[20px] font-futuraLight mb-3">
            Thank you for your request. We are working hard to find the best service
            and deals for you.
          </p>
          <p className="text-center text-gray-500 font-futuraLight leading-[24px] font-300 mb-4">
            Shortly you will find a confirmation in your email.
          </p>
          {/* Button */}
          <a
            href="/"
            className="block bg-purple-600 hover:bg-purple-700 text-white font-600 text-[14px] font-inter leading-[12px] py-2 px-4 rounded-full text-center mx-auto w-fit focus:outline-none focus:shadow-outline"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
