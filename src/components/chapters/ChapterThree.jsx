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

const ChapterThree = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="bg-dark text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-sm text-white/50"
            >
              Chapter 03
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              The <span className="text-primary">Calibration</span> Paradox
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              Why increasing ESG data and analytical effort often produce less
              clarity instead of better decision-making.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                to="/synopsis"
                className="bg-primary px-6 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition"
              >
                Back to Synopsis
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-playfair mb-4 text-primary">
              Key Focus Areas
            </h3>

            <div className="space-y-4 text-white/80 text-sm">
              <p>✔ Lack of Calibration</p>
              <p>✔ Methodological Fragmentation</p>
              <p>✔ Data Asymmetry & Divergence</p>
              <p>✔ Weighting Distortions</p>
              <p>✔ ESG Quanta Calibrator</p>
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
              Core Issue
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              The Calibration Paradox
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The core weakness of current ESG ratings is not lack of data or
              analytical rigor, but the absence of calibration — a shared
              reference framework that enables consistent comparison.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              This creates the <strong>Calibration Paradox</strong>, where
              increasing analytical effort leads to decreasing clarity.
            </p>
          </motion.div>

          {/* FRAGMENTATION */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Root Cause
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
                Methodological Fragmentation
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                ESG agencies differ in definitions of materiality, data sources,
                indicators, and weightings across E, S, and G factors.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                Some focus on financial risk, others on societal impact. Some
                emphasize disclosures, while others prioritize real outcomes.
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
                {
                  title: "Different Priorities",
                  desc: "Financial materiality vs societal impact.",
                },
                {
                  title: "Different Inputs",
                  desc: "Data sources, indicators, and scoring models vary.",
                },
                {
                  title: "Systemic Outcome",
                  desc: "Diversity becomes noise rather than useful insight.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* DATA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Structural Issues
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Data Asymmetry & Weighting Distortions
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Differences in data quality, validation, estimation methods, and
              missing values increase divergence rather than alignment.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Agencies also embed subjective judgments about E, S, and G
              importance, sector adjustments, and time horizons.
            </p>
          </motion.div>

          {/* CONSEQUENCES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Consequences
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Why It Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Investors receive conflicting signals.",
                "Corporates face mixed incentives.",
                "Regulators risk embedding bias into policy.",
                "Overall trust in ESG diminishes.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-6 hover:border-primary transition"
                >
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QUESTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Key Unresolved Questions
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Need for an ESG Quanta Calibrator
            </h2>

            <div className="grid gap-4">
              {[
                "What scoring criteria should be considered?",
                "Which are the best data sources?",
                "How should the system support policy creation?",
                "How is ESG scoring linked to geography?",
                "How can justifiable weightage be identified?",
                "How does score relate to business volume?",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="border rounded-xl p-5 bg-gray-50 hover:bg-white transition"
                >
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONCLUSION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Conclusion
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              A Structural Design Flaw
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Recognizing the Calibration Paradox reframes ESG divergence as a
              structural design flaw — and a necessary starting point for a more
              coherent and comparable framework.
            </p>

            <Link
              to="/synopsis"
              className="inline-block mt-8 bg-primary px-6 py-3 text-white uppercase text-sm hover:opacity-90 transition"
            >
              Explore More Chapters
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChapterThree;
