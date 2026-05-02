import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
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

const ChapterFive = () => {
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
              Chapter 05
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              Empirical Divergence Across{" "}
              <span className="text-primary">Rating Agencies</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              How the same company can receive conflicting ESG identities across
              providers—and why this divergence affects real decisions.
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
              <p>✔ Weak Correlation Between Ratings</p>
              <p>✔ Methodology vs Real Performance</p>
              <p>✔ Investor & Corporate Confusion</p>
              <p>✔ Transparency & Data Quality Risks</p>
              <p>✔ Need for ESG Calibration</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Introduction
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Divergence in Practice
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              The practical consequences of uncalibrated ESG ratings are most
              visible when examining companies assessed by multiple providers.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Empirical studies show that correlations between ESG ratings for
              the same firm are often weak.
            </p>
          </motion.div>

          {/* WHY IT HAPPENS */}
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
                Methodological Differences
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                These discrepancies are driven less by actual sustainability
                performance and more by differences in rating methodology.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                The company may remain stable, yet its ESG identity shifts
                depending on the rating lens applied.
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
                "Indicator selection",
                "Controversy treatment",
                "Sector benchmarking",
                "Weighting systems",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-5"
                >
                  <h4 className="font-semibold text-lg">{item}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* IMPACT */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Stakeholder Impact
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Conflicting Signals
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Investors",
                  text: "Is the company improving, deteriorating, or has only the methodology changed?",
                },
                {
                  title: "Corporates",
                  text: "Lack of coherent signals weakens strategic clarity and planning.",
                },
                {
                  title: "Regulators",
                  text: "Raises concerns about dependence on any single rating source.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-6"
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-3">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TABLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Comparative Evidence
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              ESG Score Comparison
            </h2>

            <div className="overflow-x-auto border rounded-2xl">
              <table className="w-full text-sm min-w-[700px]">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4">Company</th>
                    <th className="text-left p-4">Sustainalytics</th>
                    <th className="text-left p-4">RobecoSAM</th>
                    <th className="text-left p-4">Refinitiv</th>
                    <th className="text-left p-4">MSCI</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Nissan Motor Co., Ltd", "6", "77", "72", "CCC"],
                    ["Verizon Communications Inc", "91", "20", "67", "BB"],
                    ["Oracle Corp. Jpn", "78", "8", "63", "BB"],
                    ["Goodman Group", "86", "21", "58", "AA"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      {row.map((cell, j) => (
                        <td key={j} className="p-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Source: Billio et al. (2021). Inside the ESG ratings:
              (Dis)agreement and performance.
            </p>
          </motion.div>

          {/* STRUCTURAL */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Structural Weaknesses
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Transparency & Reliability Gaps
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              ESG ratings vary due to methodology, source data, criteria, and
              applied weightages.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Limited disclosure of complete procedures reduces transparency and
              makes robustness difficult to assess.
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
              Research Insight
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Industry-Level Disagreement
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Divergence across ESG providers has drawn substantial attention
              from investors and researchers.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-5">
              A well-known example showed Tesla receiving a strong environmental
              rating from one provider while another reached the opposite
              conclusion.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-5">
              Disagreement is especially visible in consumer durables and
              telecommunications industries.
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

export default ChapterFive;
