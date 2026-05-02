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

const Synopsis = () => {
  const chapters = [
    {
      num: "01",
      title: "The Calibration Paradox in ESG",
      desc: "ESG integrates environmental, social, and governance principles into business strategy to drive sustainable, ethical, and long-term value creation.",
      path: "/chapter-one",
    },
    {
      num: "02",
      title: "THE BROKEN ESG RATING WORLD",
      desc: "ESG ratings are highly inconsistent due to fragmented methodologies, making them influential yet unreliable tools that urgently require standardization.",
      path: "/chapter-two",
    },
    {
      num: "03",
      title: "The Calibration Paradox",
      desc: "Fragmented methodologies and lack of a common framework make ESG ratings inconsistent and unclear.",
      path: "/chapter-three",
    },
    {
      num: "04",
      title: "The Cost of Divergence",
      desc: "Divergence creates inefficiencies that distort investment decisions and regulatory outcomes.",
      path: "/chapter-four",
    },
    {
      num: "05",
      title: "EMPIRICAL DIVERGENCE",
      desc: "Ratings often differ because of methodology rather than actual sustainability performance.",
      path: "/chapter-five",
    },
    {
      num: "06",
      title: "DECISION CLARITY",
      desc: "Calibration helps investors interpret reliable ESG signals with confidence.",
      path: "/chapter-six",
    },
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* HERO */}
      <section className="bg-dark text-white px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="order-2 md:order-1"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.25em] text-xs sm:text-sm text-white/50"
            >
              Book Synopsis
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-black mt-4 leading-tight"
            >
              Solving The <span className="text-primary">ESG</span> Paradox
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              This book introduces the ESG Quanta Calibrator — a quantitative
              framework to measure and integrate ESG into financial strategy.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/Website_Abstract.pdf"
                download
                className="bg-primary px-6 py-3 rounded-md text-sm uppercase text-center hover:scale-105 transition"
              >
                Download PDF
              </a>

              <Link
                to="/abstract"
                className="border border-white/20 px-6 py-3 rounded-md text-sm uppercase text-center hover:bg-white hover:text-black transition"
              >
                View Abstract
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="order-1 md:order-2 bg-primary/10 border border-primary rounded-2xl p-6 sm:p-8 text-center"
          >
            <img
              src="/pdf.png"
              alt="Synopsis Cover"
              className="w-20 sm:w-28 mx-auto rounded shadow-lg mb-4"
            />

            <h2 className="font-playfair text-xl sm:text-2xl">Free Synopsis</h2>

            <p className="text-white/60 text-sm mt-2 mb-5">
              Get a complete chapter-by-chapter breakdown.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/Website_Abstract.pdf"
                download
                className="bg-primary px-5 py-2 rounded-md text-sm uppercase hover:scale-105 transition"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.25em] text-xs sm:text-sm text-primary font-semibold"
            >
              Introduction
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold mt-3 leading-tight"
            >
              The Calibration <span className="text-primary">Paradox</span> in
              ESG
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-sm sm:text-lg mt-6 max-w-3xl leading-relaxed"
            >
              ESG has transformed into a strategic requirement for corporations,
              investors, and regulators worldwide.
            </motion.p>
          </motion.div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {["Governance Matters", "Economic Impact", "Global Adoption"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="border rounded-2xl p-6 hover:border-primary hover:shadow-xl transition"
                >
                  <h3 className="font-semibold text-lg">{item}</h3>
                  <p className="text-sm text-gray-500 mt-3">
                    Strategic ESG value creation through measurable frameworks.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* LOGISTICS + ENVIRONMENT */}
      <section className="px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {[
            {
              tag: "Logistics Sector",
              title: "Economic Engine, Environmental Pressure",
              desc1:
                "Logistics plays a crucial role in national economic development and global supply chains, but it is also a major consumer of energy with significant environmental consequences.",
              desc2:
                "Transport-related emissions remain one of the largest contributors to global carbon dioxide output.",
            },
            {
              tag: "Environment",
              title: "The Urgency of Global Warming",
              desc1:
                "Global warming requires immediate and decisive action to secure the future of the planet.",
              desc2:
                "It is driven largely by greenhouse gas emissions that increase Earth’s average temperature and intensify climate risks worldwide.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border hover:border-primary hover:shadow-xl transition"
            >
              <p className="uppercase tracking-[0.25em] text-xs text-primary font-semibold">
                {card.tag}
              </p>

              <h3 className="font-playfair text-2xl sm:text-3xl font-bold mt-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-relaxed text-sm sm:text-base">
                {card.desc1}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                {card.desc2}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABSTRACT */}
      <section className="px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border rounded-2xl p-6 sm:p-8 lg:p-12 grid md:grid-cols-2 gap-8 items-center bg-white"
        >
          <div>
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-primary font-semibold">
              Abstract
            </p>

            <h2 className="font-playfair text-3xl sm:text-4xl font-bold mt-3">
              Book Abstract
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed text-sm sm:text-base">
              Understand how ESG Quanta Calibrator creates measurable and
              transparent sustainability scoring.
            </p>

            <Link
              to="/abstract"
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-4 transition-all"
            >
              Read Full Abstract →
            </Link>
          </div>

          <div className="bg-dark text-white rounded-2xl p-6 sm:p-8">
            <h3 className="font-playfair text-2xl text-primary mb-5">
              Highlights
            </h3>

            <div className="space-y-3 text-sm text-white/70">
              <p>✔ Global ESG Formula</p>
              <p>✔ Country-Based Weightages</p>
              <p>✔ Business Volume Integration</p>
              <p>✔ Better Investor Decisions</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CHAPTERS */}
      <section className="px-5 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20">
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-10">
          Chapter Overview
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group border p-6 rounded-2xl hover:border-primary hover:shadow-2xl transition bg-white"
            >
              <h1 className="text-5xl font-playfair text-primary/20">
                {c.num}
              </h1>

              <h3 className="font-semibold mt-3 text-lg leading-snug">
                {c.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {c.desc}
              </p>

              <Link
                to={c.path}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary"
              >
                Read More
                <span className="group-hover:translate-x-2 transition">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Synopsis;
