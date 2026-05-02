import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full text-center relative"
      >
        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 m-auto w-72 h-72 bg-primary/20 blur-3xl rounded-full"
        />

        {/* Error Code */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          {...floatAnim}
          className="relative font-playfair text-7xl md:text-9xl font-bold text-primary leading-none"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={2}
          className="mt-6 text-3xl md:text-5xl font-bold relative"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          custom={3}
          className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto relative"
        >
          Sorry, the page you are looking for does not exist, has been moved, or
          the link may be broken.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-10 flex flex-wrap justify-center gap-4 relative"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/"
              className="bg-primary px-6 py-3 rounded-md uppercase text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Back Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          variants={fadeUp}
          custom={5}
          className="mt-10 text-sm text-white/40 relative"
        >
          ESG Quanta Calibrator
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
