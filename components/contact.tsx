"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  const { theme } = useTheme(); // Get the current theme
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]); // Update `isDarkMode` after hydration

  if (!theme) return null; // Avoid rendering until the theme is available

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className={cn(
        "relative w-full lg-min-h-fits  flex flex-col items-center justify-center overflow-hidden duration-300",
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

      <HeroHighlight>
        <div className="container z-20 max-w-7xl  flex flex-col lg:flex-row items-center lg:justify-center px-6 gap-8">
          {/* Left Content */}
          <div className="max-w-2xl lg:flex-1 space-y-6 text-center lg:text-left">
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
              Get in touch with us.
            </h1>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Thank you for your interest in Syncwave Automation Pvt. Ltd. We
              are here to assist you with any questions, inquiries, or support
              needs you may have. Reach out to us through any of the following
              methods, and our dedicated team will be happy to help.
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Email Us
              </h2>
              <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                <a href="mailto:contact@syncwave.co.in" className="">
                  contact@syncwave.co.in
                </a>
              </p>
            </div>
          </div>

          {/* Right Content: Contact Form */}
          <div className="w-full lg:w-96 pl-4 lg:ml-auto hidden lg:block">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-transparent dark:bg-transparent border-emerald-500 border-2 p-6 rounded-2xl shadow-md"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your Email" type="email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    placeholder="Your Message"
                    type="text"
                    className="h-16 resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full py-2 px-4 font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300",
                  isDarkMode
                    ? "bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-600"
                    : "bg-neutral-100 text-slate-900 hover:bg-neutral-200 focus:ring-neutral-500"
                )}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default ContactUs;
