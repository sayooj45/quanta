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
            Dr. Alex Philip is a seasoned finance professional with over 25
            years of experience in strategic financial planning, working capital
            management, auditing, and taxation across diverse industries. His
            extensive career reflects a strong foundation in financial
            leadership and business performance management.
          </p>

          <p>
            In his role as Finance Controller at M/s. Kuehne + Nagel Private
            Ltd., he has led end-to-end financial operations, ensuring
            regulatory compliance, improving process efficiency, and delivering
            sustained cost optimization. His contributions have played a key
            role in strengthening organizational financial discipline and
            operational excellence.
          </p>

          <p>
            His leadership is marked by the implementation of robust financial
            controls and forecasting frameworks that enhance budget accuracy and
            support informed decision-making. Through these initiatives, he has
            consistently helped organizations improve financial visibility and
            long-term planning capabilities.
          </p>

          <p>
            Dr. Philip is also the holder of multiple copyrights related to ESG
            ratings, reflecting his strong commitment to advancing best
            practices in environmental, social, and governance evaluation. His
            work demonstrates a forward-thinking approach to integrating
            sustainability into modern finance systems.
          </p>

          <p>
            With deep expertise in financial analysis, ESG integration, and
            sustainable business practices, Dr. Philip brings a strategic and
            future-focused perspective to finance. As a collaborative leader and
            trusted advisor, he enables organizations to embed ESG principles
            into financial frameworks while aligning operational strategies with
            long-term value creation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
