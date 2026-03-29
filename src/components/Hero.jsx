import { useNavigate } from "react-router-dom";
import cover from "../assets/images/cover.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-tr from-black via-[#050505] via-60% to-[#1f0000] min-h-screen grid md:grid-cols-2 pt-20">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 text-white">
        <p className="text-primary uppercase tracking-widest text-[10px] sm:text-xs mb-3 font-font2">
          New Release · Finance & Sustainability
        </p>

        <h1 className="font-font1 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
          Solving <br /> The <span className="text-primary">ESG</span> <br />
          Paradox
        </h1>

        <p className="text-white/50 mt-3 sm:mt-4 uppercase tracking-widest text-xs sm:text-sm font-font3">
          The New Measurement Paradigm
        </p>

        <p className="text-white/70 mt-5 sm:mt-6 max-w-md md:max-w-lg text-sm sm:text-base font-font2">
          A groundbreaking framework that bridges ESG commitments with financial
          performance.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 font-font2">
          <button
            onClick={() => navigate("/synopsis")}
            className="bg-primary px-6 py-3 uppercase text-xs sm:text-sm hover:bg-dark transition-all duration-500 border border-white/30 w-full sm:w-auto"
          >
            Read Synopsis
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-white/30 px-6 py-3 hover:bg-primary transition-all duration-500 text-xs sm:text-sm w-full sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center items-center mt-10 md:mt-0 px-6 md:px-0">
        <div className=" p-6 sm:p-8 md:p-10 shadow-2xl rotate-[-2deg] max-w-[260px] sm:max-w-xs md:max-w-sm">
          <img
            src={cover}
            alt="cover"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
