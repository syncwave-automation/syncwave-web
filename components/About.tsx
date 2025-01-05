"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./ui/Sparkles";
import { useTheme } from "next-themes";

const WhatWeDoSection = () => {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "#FFFFFF" : "#000000";

  const services = [
    {
      title: "Legal Tech Solutions",
      description:
        "Streamline legal processes with our innovative tools and platforms, designed to make legal work efficient and effective.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m2 6H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "IoT Automation",
      description:
        "Empowering businesses with smart IoT solutions, enabling seamless automation and connectivity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c3.866 0 7-1.791 7-4s-3.134-4-7-4-7 1.791-7 4 3.134 4 7 4zm0 0v16m0 0c3.866 0 7-1.791 7-4s-3.134-4-7-4-7 1.791-7 4 3.134 4 7 4z"
          />
        </svg>
      ),
    },
    {
      title: "Customized Tech Solutions",
      description:
        "Crafting bespoke solutions to meet unique challenges, helping businesses scale and innovate.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-2v13m-9 4h9m-9 0v-4m9 0h-9m9 0v-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Main Section */}
      <div className="bg-white dark:bg-black py-10 px-6 md:px-12 lg:px-20 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center">
            What We Do
          </h2>

          {/* Mission Statement with Sparkles */}
          <div className="relative w-full h-20 md:h-60 lg:h-20 flex items-center justify-center overflow-hidden bg-white dark:bg-black mt-6">
            <p className="absolute text-center text-black dark:text-white text-base md:text-lg lg:text-lg px-4">
              Our mission is to empower businesses and individuals through
              cutting-edge technology tailored to their needs.
            </p>

            {/* Gradient Lines */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"></div>
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>

            {/* Sparkles Effect */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor={particleColor}
            />

            {/* Radial Gradient */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(800px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md p-6"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
