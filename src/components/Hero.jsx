import { useNavigate } from "react-router-dom";
import cover from "../assets/images/cover.jpg";
import author from "../assets/images/author.png";

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

      <div className="flex justify-center items-center mt-10 md:mt-0 px-4 sm:px-6">
        <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[440px] aspect-[4/5]">
          {/* BACK CARD */}
          <div
            className="absolute top-4 sm:top-6 right-0 sm:right-4 rotate-[12deg] z-0 
      bg-white p-2 rounded-xl shadow-2xl"
          >
            <img
              src={cover}
              alt="cover"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] 
                   aspect-[3/4.5] rounded-lg object-cover"
            />
          </div>

          {/* FRONT CARD */}
          <div
            className="absolute top-0 left-0 rotate-[-8deg] z-10 
      bg-white p-2 rounded-xl shadow-2xl"
          >
            <img
              src={author}
              alt="author"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] 
                   aspect-[3/4.5] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
