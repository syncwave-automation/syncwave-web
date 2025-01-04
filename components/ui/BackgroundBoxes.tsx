"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "--teal-200",
    "--teal-300",
    "--teal-400",
    "--blue-200",
    "--blue-300",
    "--blue-400",
    "--cyan-200",
    "--cyan-300",
    "--cyan-400",
    "--emerald-200",
    "--emerald-300",
    "--emerald-400",
    "--lime-200",
    "--lime-300",
    "--lime-400",
    "--yellow-200",
    "--yellow-300",
    "--green-200",
    "--green-300",
    "--green-400",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className={cn(
            "w-16 h-8 border-l relative",
            theme === "dark" ? "border-slate-700" : "border-slate-400"
          )}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col-${j}`}
              className={cn(
                "w-16 h-8 border-r border-t relative",
                theme === "dark" ? "border-slate-700" : "border-slate-400"
              )}
            >
              {j % 2 === 0 && i % 2 === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={cn(
                    "absolute h-6 w-10 -top-[14px] -left-[22px] stroke-[1px] pointer-events-none",
                    theme === "dark" ? "text-slate-700" : "text-slate-400"
                  )}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const BgBoxes = React.memo(BoxesCore);
