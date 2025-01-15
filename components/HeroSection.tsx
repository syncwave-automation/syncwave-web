"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { CardsStacked } from "./CardsStacked";
import { Cover } from "./ui/Cover";
import { BgBoxes } from "./ui/BackgroundBoxes";

const HeroSection = () => {
  const { theme } = useTheme(); // Current theme
  const isDarkMode = theme === "dark"; // Determine dark mode state

  return (
    <div
      className={cn(
        "relative w-full min-h-[30rem] flex flex-col items-center justify-center overflow-hidden duration-300",
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      {/* Radial Gradient */}
      <div
        className={cn(
          "absolute inset-0 z-10 pointer-events-none",
          isDarkMode
            ? "bg-[radial-gradient(circle,_transparent_0%,_rgba(0,0,0,0.8)_80%)]"
            : "bg-[radial-gradient(circle,_transparent_0%,_rgba(255,255,255,0.8)_80%)]"
        )}
      />
      {/* Background Boxes */}
      <BgBoxes />
      {/* Abstract Shape */}
      <div
        className="absolute left-1/2 top-10 transform -translate-x-1/2 blur-3xl -z-5"
        aria-hidden="true"
      >
        <div
          className={cn(
            "aspect-[1108/632] w-[69.25rem] bg-gradient-to-r opacity-30",
            isDarkMode
              ? "from-[#296f31] to-[#000000]"
              : "from-[#60ff98] to-[#dcfff0]"
          )}
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      {/* Hero Content */}
      <div className="container z-20 max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <h1
            className={cn(
              "text-3xl sm:text-4xl font-semibold",
              "bg-clip-text text-transparent bg-gradient-to-b",
              "from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400",
              "dark:text-neutral-200 dark-reader:bg-gray-800"
            )}
            style={{
              WebkitTextFillColor: "currentColor", // Ensures fallback text color
              color: "inherit",
            }}
          >
            We are Syncwave.
          </h1>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Syncwave specializes in delivering cutting-edge Legal Tech and IoT
            solutions that drive innovation and efficiency. Our expertise
            bridges the gap between technology and business, turning ideas into
            impactful realities.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Working on the <Cover>bleeding edge.</Cover>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              From concept to reality, we craft solutions tailored to empower
              everyone.
            </p>
          </div>

          <div className="py-2 px-5 text-sm text-primary bg-[#d9ffe9]/10 rounded-3xl group border-[2px] border-primary/50 w-fit">
            <pre className="uppercase flex items-center font-bold font-space-grotesk">
              Build products for everyone
              <svg
                className="ml-2 w-4 h-4 text-primary duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </pre>
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden lg:block lg:px-40">
          <CardsStacked />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
