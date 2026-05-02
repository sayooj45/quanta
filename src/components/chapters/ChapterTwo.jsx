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

const ChapterTwo = () => {
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
              Chapter 02
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              The Broken ESG <span className="text-primary">Rating World</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              Why companies can be rated both leaders and laggards — and why
              fragmented ESG scores now threaten market credibility.
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
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-playfair mb-4 text-primary">
              Key Focus Areas
            </h3>

            <div className="space-y-4 text-white/80 text-sm">
              <p>✔ Contradictions in ESG Ratings</p>
              <p>✔ Market & Investor Impact</p>
              <p>✔ Corporate Incentive Distortion</p>
              <p>✔ Regulatory Risks</p>
              <p>✔ Need for Calibration Reform</p>
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
              Introduction
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Contradictions at the Core
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Unlike financial reporting, which is built on standardized and
              comparable data, ESG ratings operate in a fragmented ecosystem
              where the same company can be rated both a leader and a laggard
              simultaneously.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Real-world comparisons reveal extreme variations across
              environmental, social, governance, and overall ESG scores. These
              inconsistencies stem from methodologies, weightages, sector
              interpretations, and data limitations.
            </p>
          </motion.div>

          {/* IMPACT */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Why It Matters
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Why ESG Ratings Now Carry
                <br className="hidden md:block" />
                Systemic Importance
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                ESG ratings influence capital flows, corporate strategy,
                regulation, and public perception.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                As ESG becomes embedded in markets, inconsistencies shape real
                economic outcomes.
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-4"
            >
              {[
                {
                  title: "Capital Markets",
                  desc: "Institutional investors allocate trillions using ESG metrics, where small rating shifts can trigger major flows.",
                },
                {
                  title: "Corporate Strategy",
                  desc: "Firms link ESG to board oversight, incentives, and disclosures.",
                },
                {
                  title: "Regulation & Reputation",
                  desc: "Ratings influence disclosure rules, trust, and stakeholder sentiment.",
                },
                {
                  title: "Core Risk",
                  desc: "ESG ratings function like market infrastructure—without expected calibration clarity.",
                  highlight: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl p-5 border transition ${
                    item.highlight
                      ? "bg-primary/5 border-primary/20"
                      : "hover:shadow-md"
                  }`}
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* PROBLEM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Core Problem
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              A Design Failure
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Low correlation among rating agencies",
                "No common calibration framework",
                "Unreliable comparisons for decision-making",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-6 hover:border-primary transition"
                >
                  <h3 className="text-lg font-semibold">{item}</h3>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mt-8">
              ESG is multidimensional, but without harmonized standards the
              system struggles to deliver trustworthy signals.
            </p>
          </motion.div>

          {/* VALUE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Long-Term Perspective
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              ESG Still Matters
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Despite these flaws, ESG remains essential for sustainable
              economic progress. Effective ESG management enhances shareholder
              value, strengthens resilience, and aligns businesses with
              long-term societal goals.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              ESG is inherently <strong>long-term in nature.</strong> Its
              benefits cannot be measured through short-term metrics alone.
            </p>
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
              Calibration Is No Longer Optional
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              The ESG ecosystem faces a paradox: its influence is expanding,
              while its foundations remain fragmented.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Without a robust calibration framework, ESG ratings risk failing
              their core purpose.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Greater standardization and transparency",
                "System-oriented evaluation",
                "Improved data quality and disclosures",
                "A unified calibration mechanism",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border p-4 text-sm font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>

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

export default ChapterTwo;
