import React from "react";
import { motion } from "framer-motion";
import cover from "../../assets/images/cover.png";

const AboutSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-white overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-primary uppercase tracking-widest text-xs mb-2">
          About
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold">
          ESG Quanta Calibrator
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-gray-700 leading-relaxed font-sans text-base"
        >
          <p>
            The ESG Quanta Calibrator invented by Dr. Alex Philip is highly
            relevant because it resolves a core flaw in ESG ratings:
            inconsistency. Different agencies often assign conflicting scores to
            the same company due to varied methodologies, data sources, and
            weightings, creating the “Calibration Paradox.” This undermines
            ESG’s credibility as a decision-making tool. The Calibrator acts as
            a meta-framework that harmonizes these differences, enabling
            comparability and restoring clarity without replacing existing
            systems.
          </p>

          <p className="mt-4">
            Its importance extends to real economic outcomes, as ESG ratings
            influence capital allocation, cost of capital, and corporate
            strategy. Without calibration, decisions can be distorted, leading
            to mispriced risk and inefficient sustainability efforts. By
            aligning ESG assessments with actual performance, the ESG Quanta
            Calibrator improves capital efficiency and strengthens ESG as a
            reliable tool for guiding sustainable and informed economic
            decisions.
          </p>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute w-40 h-40 bg-primary/20 blur-3xl rounded-full -bottom-6 -left-6"></div>

          <motion.img
            src={cover}
            alt="Book Cover"
            whileHover={{ scale: 1.05 }}
            className="w-64 md:w-80 relative z-10 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
