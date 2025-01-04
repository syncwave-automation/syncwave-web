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
    name: "Karen McConcern",
    designation: "Director of Complaints",
    content: (
      <p>
        I used these cards once, and now my{" "}
        <Highlight>manager thinks</Highlight> I’m a UI expert. Honestly, it’s
        all downhill from here.
      </p>
    ),
  },
  {
    id: 1,
    name: "Chad Thundercode",
    designation: "Full-Stack Overflow Engineer",
    content: (
      <p>
        I ran this in production without testing, and it{" "}
        <Highlight>only broke</Highlight> half of the app. That’s what I call a
        50% success rate!
      </p>
    ),
  },
  {
    id: 2,
    name: "Patricia Debugging",
    designation: "Chief Error Finder",
    content: (
      <p>
        These cards are so intuitive, I didn’t even{" "}
        <Highlight>have to Google</Highlight> how to use them. I did anyway,
        just to be safe.
      </p>
    ),
  },
];
