import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const HeroSection = ({ children, className }) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-bg-light to-white",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,167,69,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,193,7,0.05)_25%,rgba(255,193,7,0.05)_50%,transparent_50%,transparent_75%,rgba(255,193,7,0.05)_75%)] bg-[length:20px_20px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

const HeroContent = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaAction,
  images = [],
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-main mb-4 lg:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-primary-green font-medium mb-3 lg:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={ctaAction}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-primary-green rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[44px]"
            >
              {ctaText}
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                className={cn(
                  "relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300",
                  index === 0
                    ? "col-span-2 h-32 sm:h-40 lg:h-48"
                    : "h-24 sm:h-28 lg:h-32"
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white text-xs sm:text-sm font-medium">
                  {image.title}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-accent-yellow rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-green rounded-full opacity-20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export { HeroSection, HeroContent };
