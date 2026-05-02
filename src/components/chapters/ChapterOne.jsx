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

const ChapterOne = () => {
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
              Chapter 01
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl md:text-6xl font-bold mt-4 leading-tight"
            >
              The Calibration <span className="text-primary">Paradox</span> in
              ESG
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70 leading-relaxed text-lg"
            >
              Understanding how ESG evolved into a global business framework —
              and why inconsistent standards now threaten its credibility.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/synopsis"
                className="bg-primary px-6 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition"
              >
                Back to Synopsis
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
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
              <p>✔ ESG Evolution & Global Adoption</p>
              <p>✔ Environmental, Social & Governance Pillars</p>
              <p>✔ Strategic Business Importance</p>
              <p>✔ Challenges in ESG Standardization</p>
              <p>✔ Future of Sustainable Value Creation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* INTRODUCTION */}
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
              ESG Evolution
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Environmental, Social, and Governance (ESG) has evolved from a
              niche concept into a mainstream framework guiding corporate
              strategy and accountability. While the term gained prominence
              after the 2004 UN report <strong>“Who Cares Wins”</strong>, its
              foundational ideas trace back much earlier.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Governments worldwide have increasingly recognized its importance,
              introducing policies and regulations to encourage adoption. Today,
              a significant majority of large corporations publish ESG reports
              alongside financial disclosures.
            </p>
          </motion.div>

          {/* PRINCIPLES */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                Core Principles
              </p>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
                Strategic Importance
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                ESG aligns profitability with sustainability, resilience, and
                ethical leadership.
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
                  title: "Environmental responsibility",
                  desc: "Resource use, emissions, sustainability, and climate action.",
                },
                {
                  title: "Social accountability",
                  desc: "Labour practices, community impact.",
                },
                {
                  title: "Governance integrity",
                  desc: "Transparency, ethics, risk management.",
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

          {/* DEBATE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              Debate
            </p>

            <h2 className="font-playfair text-3xl md:text-5xl font-bold mt-3 mb-6">
              The Ongoing Challenges
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Are ESG frameworks truly effective or merely compliance-driven?",
                "How can companies measure and standardize ESG performance accurately?",
                "Can economic expansion coexist with meaningful environmental protection?",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="border rounded-xl p-6 hover:border-primary transition"
                >
                  <h3 className="text-lg font-semibold">{item}</h3>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mt-8">
              These questions are particularly relevant for high-impact sectors,
              where operational realities often clash with sustainability
              ambitions. Organizations must navigate these uncertainties while
              maintaining transparency and credibility.
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
              Solving the Paradox
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              ESG has become a vital part of modern corporate strategy, driven
              by regulatory, investor, and societal demands for responsible and
              sustainable growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Strong governance frameworks",
                "Innovation in sustainable technologies",
                "Clear and consistent ESG metrics",
                "Strategic alignment between growth and responsibility",
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

export default ChapterOne;
