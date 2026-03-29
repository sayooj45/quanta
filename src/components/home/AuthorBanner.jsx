import React from "react";

const AuthorBanner = () => {
  return (
    <div className="bg-primary w-full px-6 md:px-12 py-10 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10">
      {/* Left */}
      <div className="text-white text-center md:text-left">
        <p className="uppercase tracking-widest text-xs opacity-80 font-font3">
          Author
        </p>
        <h2 className=" text-2xl md:text-3xl font-semibold font-font1">
          Dr. Alex Philip
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-[2px] bg-white/30"></div>

      {/* Right */}
      <div className="text-white/90 max-w-2xl text-center md:text-left text-sm md:text-base leading-relaxed font-font2">
        <p>
          Finance leader with 20+ years of experience in ESG integration and
          strategic financial planning. Driving sustainable growth by aligning
          business performance with long-term value.
        </p>
      </div>
    </div>
  );
};

export default AuthorBanner;
