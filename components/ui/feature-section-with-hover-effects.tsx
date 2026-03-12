import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrush,
  IconDeviceMobile,
  IconBolt,
  IconTarget,
  IconRocket,
  IconCode,
  IconSettings,
  IconChartBar,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Psychology-First Design",
      description:
        "We don't just design for screens; we design for human behavior and user psychology.",
      icon: <IconBrush />,
    },
    {
      title: "Mobile-First Architecture",
      description:
        "Because 80% of your customers are seeing your brand on their phone first.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Lightning Performance",
      description:
        "Websites that load in under 2 seconds. No more lost leads due to slow loading.",
      icon: <IconBolt />,
    },
    {
      title: "Conversion-Centric",
      description: "Every pixel is placed with one goal in mind: turning visitors into loyal customers.",
      icon: <IconTarget />,
    },
    {
      title: "Modern Tech Stack",
      description: "Built with React, Next.js, and Framer Motion for the smoothest experience available.",
      icon: <IconCode />,
    },
    {
      title: "SEO Optimized",
      description:
        "Semantic HTML and technical SEO best practices working for you from day one.",
      icon: <IconRocket />,
    },
    {
      title: "Scalable Systems",
      description:
        "Your website grows with your business. Easy updates and robust infrastructure.",
      icon: <IconSettings />,
    },
    {
      title: "Analytics & Insights",
      description: "Track performance and understand exactly how your customers interact with you.",
      icon: <IconChartBar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => {
        const { title, description, icon } = feature;
        return (
          <div key={title}>
            <Feature 
              title={title}
              description={description}
              icon={icon}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-900",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-900",
        index < 4 && "lg:border-b dark:border-neutral-900"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-zinc-950/50 dark:from-zinc-900/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-950/50 dark:from-zinc-900/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-brand-teal">
        {React.cloneElement(icon as React.ReactElement, { size: 32, stroke: 1.5 })}
      </div>
      <div className="text-xl font-chunky font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-800 dark:bg-zinc-800 group-hover/feature:bg-brand-teal transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-zinc-200 dark:text-zinc-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs relative z-10 px-10 leading-relaxed font-sans mt-2">
        {description}
      </p>
    </div>
  );
};
