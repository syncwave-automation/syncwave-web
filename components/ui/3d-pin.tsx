"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className={cn(
            "absolute left-1/2 p-2 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 overflow-hidden",
            isDarkMode
              ? "bg-zinc-800 border border-white/[0.1] group-hover/pin:border-white/[0.2]"
              : "bg-white border border-black/[0.1] group-hover/pin:border-black/[0.2]"
          )}
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} isDarkMode={isDarkMode} />
    </Link>
  );
};

export const PinPerspective = ({
  title,
  href,
  isDarkMode,
}: {
  title?: string;
  href?: string;
  isDarkMode: boolean;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className={cn(
              "relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 transition duration-500",
              isDarkMode
                ? "bg-transparent text-white ring-white/10"
                : "bg-transparent text-black ring-black/10"
            )}
          >
            <span className="relative z-20 text-s font-bold inline-block py-0.5">
              {title}
            </span>
            <span
              className={cn(
                "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r transition-opacity duration-500",
                isDarkMode
                  ? "from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"
                  : "from-indigo-400/0 via-indigo-400/90 to-indigo-400/0"
              )}
            ></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: delay,
              }}
              className={cn(
                "absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]",
                isDarkMode ? "bg-sky-500/[0.08]" : "bg-indigo-500/[0.08]"
              )}
            ></motion.div>
          ))}
        </div>

        <>
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]",
              isDarkMode
                ? "from-transparent to-sky-500"
                : "from-transparent to-indigo-500"
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b translate-y-[14px] w-px h-20 group-hover/pin:h-40",
              isDarkMode
                ? "from-transparent to-sky-500"
                : "from-transparent to-indigo-500"
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 translate-x-[1.5px] bottom-1/2 rounded-full z-40 blur-[3px]",
              isDarkMode
                ? "bg-sky-600 w-[4px] h-[4px]"
                : "bg-indigo-600 w-[4px] h-[4px]"
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 translate-x-[0.5px] bottom-1/2 rounded-full z-40",
              isDarkMode
                ? "bg-sky-300 w-[2px] h-[2px]"
                : "bg-indigo-300 w-[2px] h-[2px]"
            )}
          />
        </>
      </div>
    </motion.div>
  );
};
