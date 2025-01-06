"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { PinContainer } from "./ui/3d-pin";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/FlipWord";

const Highlights = () => {
  const { theme } = useTheme();
  const words = ["Vision", "Mission", "Values"];
  const content = ["To empower users with AI-driven solutions that simplify legal and automation processes, fostering innovation and inclusivity for all.", "To transform India's legal and automation landscapes by making technology accessible, efficient, and privacy-conscious for homes, enterprises, and individuals.", "Innovation, accessibility, privacy, and sustainability guide us as we craft cutting-edge solutions tailored to meet unique challenges."];

  const highlights = [
    {
      title: "Our Mission",
      description:
        "To transform India's legal and automation landscapes by making technology accessible, efficient, and privacy-conscious for homes, enterprises, and individuals.",
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
            d="M12 20l-8-8h16l-8 8zm0-2V4m0 4l4-4m-4 4L8 4"
          />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      description:
        "To empower users with AI-driven solutions that simplify legal and automation processes, fostering innovation and inclusivity for all.",
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Our Values",
      description:
        "Innovation, accessibility, privacy, and sustainability guide us as we craft cutting-edge solutions tailored to meet unique challenges.",
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
            d="M9.75 17L3 10.5h3.75V4h6v6.5H21z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Main Section */}
                {/* Section Title */}
                <div className="bg-white dark:bg-black px-6 md:px-12 lg:px-20 text-gray-800 dark:text-gray-200">

                <h2 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center">
                  Our <FlipWords words={words} duration={9000} /> <br />
                  
                </h2>
                <h2 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center">
                  <FlipWords className="text-sm sm:text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 text-center" words={content} />
                  
                </h2>
    
                  {/* <FlipWords words={content} /> */}
              </div>
      <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
        <div className="container mx-auto max-w-7xl">
           {/* Services Grid
           <div className="w-full flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {highlights.map((service, index) => (
              <PinContainer key={index} title={service.title}>
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] items-center text-center content-center place-content-center bg-white dark:bg-black dark:text-white p-6 rounded-lg shadow-lg">
                  <div className="mb-8">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {service.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </PinContainer>
            ))}
          </div> */}
          {/* Mission Statement with Lamp */}
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-lg font-medium tracking-tight text-transparent md:text-lg"
            >
              At Syncwave, we bend technology and simplicity to create impactful
              solutions that address real-world challenges.
            </motion.h1>
          </LampContainer>

         
        </div>
      </div>
    </div>
  );
};

export default Highlights;
