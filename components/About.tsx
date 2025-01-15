"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { BgBoxes } from "./ui/BackgroundBoxes";

const AboutUs = () => {
  const { theme } = useTheme(); // Get the current theme
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]); // Update `isDarkMode` after hydration

  if (!theme) return null; // Avoid rendering until the theme is available

  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-start w-full px-6 py-12 sm:px-16 lg:px-24 overflow-hidden transition-colors duration-300",
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      {/* Background Overlay */}
      <div
        className={cn(
          "absolute inset-0 w-full z-10 pointer-events-none",
          isDarkMode
            ? "bg-[radial-gradient(circle,_transparent_0%,_rgba(0,0,0,0.8)_80%)]"
            : "bg-[radial-gradient(circle,_transparent_0%,_rgba(255,255,255,0.8)_80%)]"
        )}
      />

      {/* Background Boxes */}
      <BgBoxes />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Established on April 6th, 2024, Syncwave Automation Pvt. Ltd. is a
              pioneering force in the LegalTech and IoT automation sectors. We
              are registered under Startup India and MSME, committed to
              delivering innovative, scalable, and privacy-conscious solutions
              tailored to meet India’s unique challenges.
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/3 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Our Credentials
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CIN: U62091TN2024PTC169197
              <br />
              Based in Chennai, Tamil Nadu
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Registered under Startup India and MSME to revolutionize
              automation and legal technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
