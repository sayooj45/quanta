import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
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

const ChapterSix = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="bg-dark text-white px-6 md:px-16 py-20">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-[0.3em] text-sm text-white/50">
              Chapter 06
            </p>

            <h1 className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Decision Clarity &{" "}
              <span className="text-primary">Risk Realism</span>
            </h1>

            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              How calibrated ESG scoring transforms investor decisions from
              passive score consumption into intelligent signal interpretation.
            </p>

            <div className="mt-8">
              <Link
                to="/synopsis"
                className="bg-primary px-6 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition"
              >
                Back to Synopsis
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-playfair mb-4 text-primary">
              Key Focus Areas
            </h3>

            <div className="space-y-4 text-white/80 text-sm">
              <p>✔ Signal Interpretation</p>
              <p>✔ Better Portfolio Construction</p>
              <p>✔ Stronger Risk Management</p>
              <p>✔ Smarter Stewardship</p>
              <p>✔ Long-Term Investment Timing</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 py-20">
        <motion.div
          className="max-w-5xl mx-auto space-y-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* INTRO */}
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Introduction
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              From Score Consumption to Signal Interpretation
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              For investors, ESG calibration represents a shift from score
              consumption to signal interpretation.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              In an uncalibrated environment, ESG integration is often reduced
              to selecting a preferred data provider and accepting its
              assumptions as given. Calibration changes this dynamic by
              restoring agency to the investor.
            </p>
          </motion.div>

          {/* SIGNALS */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeUp}>
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Core Benefit
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
                Real Signal vs Noise
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                Calibrated ESG assessments help investors distinguish between
                robust sustainability signals and methodology-driven noise.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-5">
                Convergence across rating systems often indicates resilient ESG
                strengths, while persistent divergence highlights areas needing
                deeper due diligence or risk pricing.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {[
                {
                  title: "Convergence",
                  text: "Strong signals consistent across providers.",
                },
                {
                  title: "Divergence",
                  text: "Requires deeper analysis, engagement, or caution.",
                },
                {
                  title: "Investor Agency",
                  text: "Decisions become proactive rather than provider-dependent.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="border rounded-xl p-5"
                >
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PORTFOLIO */}
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Portfolio Construction
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Better Strategy Design
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Investors can build portfolios that reflect intentional
              sustainability objectives while understanding sensitivity to
              materiality lenses and weighting assumptions.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Calibration supports scenario analysis, allowing portfolios to be
              tested under multiple sustainability interpretations without
              constantly switching data providers.
            </p>
          </motion.div>

          {/* RISK */}
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Risk Management
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Forward-Looking Risk Realism
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Transition risks become clearer.",
                "Governance vulnerabilities are easier to identify.",
                "Social exposure can be priced more accurately.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ y: -6 }}
                  className="border rounded-xl p-6"
                >
                  <p className="font-medium text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mt-8">
              By filtering distortions caused by inconsistent scoring practices,
              calibrated ESG profiles align investment decisions more closely
              with fiduciary responsibility.
            </p>
          </motion.div>

          {/* STEWARDSHIP */}
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Stewardship
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              More Meaningful Engagement
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Investors can engage companies on ESG issues that show
              cross-methodology relevance rather than narrowly chasing rating
              improvements.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              This shifts conversations from score optimization to substantive
              performance improvement.
            </p>
          </motion.div>

          {/* TIMING */}
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Market Timing
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              Better Entry & Exit Decisions
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Tracking calibrated ESG changes over time helps investors
              anticipate shifts in reputation, regulatory standing, and
              operational resilience.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              This can reveal when to increase exposure to improving sectors or
              reduce exposure to declining ones.
            </p>
          </motion.div>

          {/* CONCLUSION */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Conclusion
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              ESG as Decision Intelligence
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Calibration allows investors to treat ESG not as a compliance
              overlay, but as decision intelligence that supports disciplined
              capital allocation.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-5">
              In a world where sustainability increasingly drives long-term
              value creation, calibrated ESG metrics are becoming essential for
              prudent investment practice.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Reliable company comparisons",
                "Cross-industry opportunity analysis",
                "Improved diversification",
                "Confidence in long-term decisions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ scale: 1.03 }}
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
        </motion.div>
      </section>
    </div>
  );
};

export default ChapterSix;
