import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Abstract = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="bg-dark text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-sm text-white/50"
            >
              Book Overview
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              <span className="text-primary">Abstract</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              Introducing the ESG Quanta Calibrator — a transparent and
              measurable framework designed to solve inconsistency in ESG
              evaluation systems.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/synopsis"
                className="bg-primary px-6 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition"
              >
                View Chapters
              </Link>

              <a
                href="/Website_Abstract.pdf"
                download
                className="bg-primary px-6 py-3 uppercase text-sm text-white rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Download PDF
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-playfair mb-4 text-primary">
              Key Highlights
            </h3>

            <div className="space-y-4 text-white/80 text-sm">
              <p>✔ Global ESG Rating Challenges</p>
              <p>✔ Country-Specific ESG Weightages</p>
              <p>✔ Business Volume Based Scoring</p>
              <p>✔ Transparent Global ESG Formula</p>
              <p>✔ Better Sustainability Decisions</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Background
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              The ESG Rating Challenge
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The increasing emphasis on Environmental, Social, and Governance
              (ESG) has led to a proliferation of ESG rating agencies, each
              employing distinct methodologies, weightages, and evaluation
              criteria.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              These agencies source information from company websites, annual
              reports, sustainability reports, media coverage, regulatory
              disclosures, NGO publications, and stock exchange filings.
            </p>
          </motion.div>

          {/* PROBLEMS */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Core Problems
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
                Why Current Models Fall Short
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                The absence of a globally uniform ESG reporting standard creates
                challenges in consistency, comparability, and reliability across
                jurisdictions.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                Many current models remain transaction-centric and fail to
                capture systemic realities for multinational companies operating
                across diverse regulatory environments.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-4"
            >
              {[
                "No global reporting standard",
                "Weak cross-country comparability",
                "Ignores country-specific realities",
                "Limited reliability for multinationals",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-5 hover:border-primary hover:shadow-lg transition"
                >
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Proposed Solution
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              ESG Quanta Calibrator
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              This book proposes the ESG Quanta Calibrator, a new ESG rating
              methodology that integrates all relevant assessment criteria and
              applies suitable environmental, social, and governance weightages
              according to each country’s context.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              The model incorporates globally recognised country-specific
              indices, ensuring that ratings reflect both the local operating
              environment and the scale of a company’s activities in each
              jurisdiction.
            </p>
          </motion.div>

          {/* FORMULA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Global ESG Formula
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-4 mb-6">
              GS = Σ (CSi × BVi)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Global ESG Score = Sum of each Country ESG Score multiplied by
              that Country’s Business Volume.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Impact
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Why It Matters
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Measurable and testable ESG performance",
                "Transparent framework for stakeholders",
                "Improved decision-making for investors",
                "Greater accountability in sustainability efforts",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="border rounded-xl p-6 hover:border-primary hover:shadow-lg transition"
                >
                  <p className="font-medium text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONCLUSION */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark text-white rounded-2xl p-8 md:p-12"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Conclusion
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              A New Standard for ESG Evaluation
            </h2>

            <p className="text-white/70 leading-relaxed text-lg">
              By combining country context, business scale, and transparent
              scoring logic, the ESG Quanta Calibrator addresses the paradox of
              fragmented ESG ratings and enables more credible sustainability
              measurement worldwide.
            </p>

            <Link
              to="/synopsis"
              className="inline-block mt-8 bg-primary px-6 py-3 text-sm uppercase hover:scale-105 transition"
            >
              Explore Chapters
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Abstract;
