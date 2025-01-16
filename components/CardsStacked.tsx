"use client";
import { CardStack } from "@/components/ui/CardStack";
import { cn } from "@/lib/utils";
export function CardsStacked() {
  return <CardStack items={CARDS} />;
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Shizuku",
    designation: "Product Development Specialist",
    content: (
      <p>
        Syncwave Automation Pvt. Ltd. excels in merging LegalTech and IoT solutions.{" "}
        <Highlight>Their products, Automize and Leximo, </Highlight> offer innovative, user-friendly 
        experiences that enhance efficiency and accessibility. 
      </p>
    ),
  },
  {
    id: 1,
    name: "Nausicaä",
    designation: "Environmental Scientist",
    content: (
      <p>
        I’m impressed with Automize’s{" "}
        <Highlight>seamless integration capabilities.</Highlight> It provides exceptional control 
        and security, making automation simple and effective for any environment.
      </p>
    ),
  },
  {
    id: 2,
    name: "Howl",
    designation: "Chief Innovation Officer",
    content: (
      <p>
        With Leximo, navigating the legal landscape has never been easier.{" "}
        <Highlight>Its comprehensive database and user-friendly interface</Highlight> empower users to find accurate 
        legal information quickly and efficiently.
      </p>
    ),
  },
];
