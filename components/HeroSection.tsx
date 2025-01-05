"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { CardsStacked } from "./CardsStacked";
import { Cover } from "./ui/Cover";
// import { HeroHighlight } from "./ui/BgHighlight";
// import { BgBoxes } from "./ui/BackgroundBoxes";
import { HeroHighlight } from "./ui/HeroHighlight";

const HeroSection = () => {
  const { theme } = useTheme(); // Get the current theme
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]); // Update `isDarkMode` after hydration

  if (!theme) return null; // Avoid rendering until the theme is available

  return (
    <div
      className={cn(
        "h-auto min-h-96 relative w-full overflow-hidden flex flex-col items-center justify-center transition-colors duration-300",
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      {/* Radial Gradient */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full z-10 pointer-events-none",
          isDarkMode
            ? "bg-[radial-gradient(circle,_transparent_0%,_rgba(0,0,0,0.8)_80%)]"
            : "bg-[radial-gradient(circle,_transparent_0%,_rgba(255,255,255,0.8)_80%)]"
        )}
      />

      {/* Background Boxes */}
      {/* <BgBoxes /> */}
      {/* <HeroHighlight> */}
      <HeroHighlight>
        {/* Abstract Shape */}
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-5 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className={cn(
              "aspect-[1108/632] w-[69.25rem] bg-gradient-to-r opacity-30 dark:opacity-40",
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
        <div className="container z-20 max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 pointer-events-none">
          {/* Left Content */}
          <div className="max-w-2xl flex flex-col items-start ">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400">
              We are Syncwave.
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Syncwave specializes in delivering cutting-edge Legal Tech and IoT
              solutions that drive innovation and efficiency. Our expertise
              bridges the gap between technology and business, turning ideas
              into impactful realities.
            </p>

            {/* Additional Info */}
            <div className="mt-6 pointer-events-auto">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Working on the <Cover>bleeding edge.</Cover>
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                From concept to reality, we craft solutions tailored to empower
                everyone.
              </p>
            </div>

            {/* Subheading with Call-to-Action */}
            <div className="mt-6 py-2 px-5 text-sm text-primary bg-[#d9ffe9]/10 rounded-3xl group border-[2px] border-primary/50 w-fit pointer-events-auto">
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

          {/* Right Content: Stacked Cards */}
          <div className="hidden lg:block lg:px-40 pointer-events-auto">
            <CardsStacked />
          </div>
        </div>
      </HeroHighlight>
      {/* </HeroHighlight> */}
    </div>
  );
};

export default HeroSection;
