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
              Founded on April 6th, 2024, Syncwave Automation Pvt. Ltd. is
              redefining the future of innovation by seamlessly blending
              LegalTech and IoT automation. As a proudly registered Startup
              India and MSME entity, we are committed to crafting cutting-edge
              solutions that address India’s unique challenges while setting
              global benchmarks in technology and design.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
              At Syncwave, we specialize in bridging the gap between technology
              and business. Our two flagship products, <strong>Automize</strong>{" "}
              and <strong>Leximo</strong>, embody our vision of innovation:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Automize</strong>: A revolutionary IoT platform designed
                to elevate both homes and enterprises. With modular,
                privacy-focused systems, <strong>Automize</strong> provides
                unparalleled control, security, and scalability. Fully
                open-standard and integration-ready, it’s the ultimate solution
                for seamless automation and software consultancy.
              </li>
              <li className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                <strong>Leximo</strong>: India’s most advanced LegalTech
                platform, offering AI-powered legal consultancy and services.
                Trained on over 800 national acts and 50,000 Supreme Court
                cases, <strong>Leximo</strong> delivers precise, citation-backed
                answers, enabling users to track cases, connect with lawyers,
                draft documents, and navigate the legal landscape with
                confidence.
              </li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
              Our solutions are more than just products—they are experiences.
              Designed with state-of-the-art security, modularity, and open
              integration, we empower businesses and individuals to achieve
              efficiency, privacy, and control like never before.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
              At Syncwave, we don’t just innovate; we transform. By leveraging
              the latest in AI, IoT, and automation, we turn bold ideas into
              impactful realities, shaping a smarter, more connected future.
            </p>
            <p className="text-lg sm:text-xl font-bold mt-6">
              Join the wave of innovation. <strong>Welcome to Syncwave.</strong>
            </p>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/3 lg:h-full bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
