import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Crafted to empower our customers",
      description:
        "Designed for all who aspire to achieve more, no matter who they are.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "Crafted for simplicity, delivering benefits that reflect your investment.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Experience the best market prices with complete transparency—no strings attached.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "99.99% Uptime guarantee",
      description: "We are built to withstand any challenges.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable and Modular Design",
      description: "Enjoy versatile access options without the hassle of purchasing additional seats.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Our commitment to excellence doesn't compromise.",
      icon: <IconHelp />,
    },
    {
      title: "Robust Security Features",
      description:
        "With a focus on security, our product includes rigorous safeguards to protect your information at all times.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Your Satisfaction, Our Priority",
      description: "Your satisfaction is at the heart of our mission, guiding us to create solutions that truly meet your needs.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10 py-10 px-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
