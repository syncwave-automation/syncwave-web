"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { PinContainer } from "@/components/ui/3d-pin";
import { HeroHighlight } from "@/components/ui/HeroHighlight";

const AboutUs = () => {
  const { theme } = useTheme(); // Get the current theme
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]); // Update `isDarkMode` after hydration

  if (!theme) return null; // Avoid rendering until the theme is available

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
    <div
      className={cn(
        "h-auto min-h-128 relative w-full overflow-hidden flex flex-col items-center justify-center transition-colors duration-300",
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
              About Us
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Established on April 6th, 2024, Syncwave Automation Pvt. Ltd. is a
              pioneering force in the LegalTech and IoT automation sectors. We
              are registered under Startup India and MSME, committed to
              delivering innovative, scalable, and privacy-conscious solutions
              tailored to meet India’s unique challenges.
            </p>

            {/* Additional Info */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Our Credentials
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                CIN: U62091TN2024PTC169197 | Based in Chennai, Tamil Nadu
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Registered under Startup India and MSME to revolutionize
                automation and legal technology.
              </p>
            </div>

            {/* Subheading with Call-to-Action */}
            <div className="mt-6 py-2 px-5 text-sm text-primary bg-[#d9ffe9]/10 rounded-3xl group border-[2px] border-primary/50 w-fit pointer-events-auto">
              <pre className="uppercase flex items-center font-bold font-space-grotesk">
                At Syncwave, we strive to bend technology and simplicity to
                create impactful solutions that address real world challenges.
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
          <div className="hidden lg:block lg:px-40 pointer-events-auto"></div>
        </div>

        {/* Services Grid
                  <div className=" w-full flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {highlights.map((service, index) => (
                      <PinContainer
                        key={index}
                        title={service.title}
                        // href={service.link}
                      >
                        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] items-center text-center content-center place-content-center bg-white dark:bg-black dark:text-white p-6 rounded-lg shadow-lg">
                          <div className="mb-8">{service.icon}</div>
                          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{service.title}</h3>
                          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                            {service.description}
                          </p>
                        </div>
                      </PinContainer>
                    ))}
                  </div> */}
      </HeroHighlight>
      {/* </HeroHighlight> */}
    </div>
  );
};

export default AboutUs;
