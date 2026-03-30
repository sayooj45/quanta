import React from "react";
import { motion } from "framer-motion";
import author from "../../assets/images/author.png";

const AuthorSection = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-gray-50 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:text-left"
      >
        <p className="text-primary uppercase tracking-widest text-xs mb-2">
          About the Author
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold">
          Dr. Alex Philip
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute w-40 h-40 bg-primary/20 blur-3xl rounded-full -top-6 -right-6"></div>

          <img
            src={author}
            alt="Dr. Alex Philip"
            className="w-72 md:w-96 rounded-2xl shadow-2xl object-cover relative z-10"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-gray-700 leading-relaxed space-y-4 font-sans text-base"
        >
          <p>
            Dr. Alex Philip is a seasoned finance professional with over 20
            years of experience in strategic financial planning, internal
            control, fund management, auditing, and taxation across diverse
            industries.
          </p>

          <p>
            As Finance Controller at Kuehne Nagel Private Ltd., he has led
            end-to-end financial operations, ensuring compliance while enhancing
            efficiency and optimizing costs.
          </p>

          <p>
            He has demonstrated strong transformational leadership by
            establishing a Project Implementation and Tendering Division in
            Consolidated Shipping Line India Private Ltd., significantly
            improving performance and profitability.
          </p>

          <p>
            A collaborative leader and strategic advisor, he helps organizations
            embed ESG principles into financial frameworks while aligning
            strategy with long-term business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
