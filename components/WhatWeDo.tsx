"use client";

import React from "react";
import { useTheme } from "next-themes";
import { FeaturesSection } from "./ui/FeatureSection";

const WhatWeDoSection = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      {/* Main Section */}
      <div className="bg-white dark:bg-black py-10 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center">
            What We Offer
          </h2>

          <div className="relative w-full h-20 md:h-60 lg:h-20 flex items-center justify-center overflow-hidden bg-white dark:bg-black mt-6">
            {/* Gradient Lines */}
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent h-[4px] w-full blur-md"></div>
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent h-px w-full"></div>

            <p className="absolute text-center text-black dark:text-white text-base md:text-lg lg:text-lg px-4">
            At Syncwave, we bend technology and simplicity to create impactful solutions that address real-world challenges.
            </p>

            {/* Radial Gradient */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(800px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          <FeaturesSection />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
