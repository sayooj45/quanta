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

const ChapterFour = () => {
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
              Chapter 04
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              The Cost of <span className="text-primary">Divergence</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              Why inconsistent ESG ratings create systemic inefficiencies for
              investors, corporates, regulators, and society.
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
            initial={{ opacity: 0, x: 60 }}
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
              <p>✔ Investor Risk & Capital Allocation</p>
              <p>✔ Corporate Strategic Ambiguity</p>
              <p>✔ Financing Cost Volatility</p>
              <p>✔ Regulatory Distortion</p>
              <p>✔ Need for Calibration Frameworks</p>
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
              The Cost of Divergence
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              ESG rating divergence is not a mere technical inconsistency but a
              systemic inefficiency with significant consequences for investors,
              corporates, regulators, and society.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              As ESG becomes deeply embedded in financial decision-making, these
              divergences amplify costs and distort outcomes across the economic
              system.
            </p>
          </motion.div>

          {/* INVESTORS */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Investors
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
                Reliability Breakdown
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                Inconsistent ESG ratings weaken the reliability of risk
                assessment and capital allocation.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                This leads to unintended risks, missed opportunities, and weaker
                fiduciary accountability.
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
                  title: "Passive Investing",
                  desc: "ESG indices depend on rating thresholds, yet divergent methodologies create inconsistent compositions.",
                },
                {
                  title: "Tracking Error",
                  desc: "Performance differences arise where investors assume comparability but receive different exposures.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-5"
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CORPORATES */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Corporates
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Strategic Ambiguity
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Conflicting ESG evaluations make it difficult for companies to
              determine which sustainability priorities to pursue.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              This creates fragmented decision-making, higher reporting burdens,
              and weaker organizational alignment.
            </p>
          </motion.div>

          {/* CAPITAL COSTS */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Financing Impact
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Capital Cost Volatility
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              ESG-linked loans and bonds often tie pricing to ESG metrics.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              When ratings fluctuate due to methodology rather than real
              performance, firms face unjustified financing volatility.
            </p>
          </motion.div>

          {/* REGULATION + SOCIETY */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Regulators",
                heading: "Policy Distortion",
                desc: "Inconsistent ratings risk importing private methodological bias into public regulation.",
              },
              {
                title: "Society",
                heading: "Trust Erosion",
                desc: "Conflicting ESG signals erode trust and slow environmental and social transitions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                  {item.title}
                </p>

                <h3 className="font-playfair text-3xl font-bold mt-3 mb-4">
                  {item.heading}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* BIGGER COST */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              System-Wide Effect
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Misallocation of Capital & Attention
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Collectively, these effects lead to a misallocation of capital,
              attention, and effort.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Companies may optimize scores instead of creating real-world
              impact, while true leaders are overlooked.
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
              Calibration Is Essential
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              The solution is not incremental change alone, but a calibration
              framework that restores coherence, comparability, and trust.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-5">
              Tools like the <strong>ESG QUANTA CALIBRATOR</strong> aim to guide
              better decisions for investors and corporates.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Efficient capital allocation",
                "Improved brand value & trust",
                "Long-term productivity gains",
                "Support for a resilient global economy",
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

export default ChapterFour;
