import React from "react";
import { cn } from "@/lib/utils";
import {
  IconSearch,
  IconChartInfographic,
  IconServer,
  IconLink,
  IconFileText,
  IconTrophy,
  IconDeviceAnalytics,
  IconRocket,
} from "@tabler/icons-react";

export function SEOFeaturesSection() {
  const features = [
    {
      title: "Intent-Based Strategy",
      description:
        "We don't just chase volume; we target the exact keywords your customers use when they are ready to buy.",
      icon: <IconSearch />,
    },
    {
      title: "Visibility Compounding",
      description:
        "SEO is an investment that grows over time. We build systems that compound your organic reach month after month.",
      icon: <IconChartInfographic />,
    },
    {
      title: "Technical Dominance",
      description:
        "We ensure your site is lightning-fast, perfectly indexed, and technically superior to every competitor.",
      icon: <IconServer />,
    },
    {
      title: "Authority Building",
      description: 
        "High-tier backlinks and digital PR that establish your brand as the undisputed leader in your industry.",
      icon: <IconLink />,
    },
    {
      title: "Content Excellence",
      description: "Data-driven content that answers customer questions clearly and converts them into loyal leads.",
      icon: <IconFileText />,
    },
    {
      title: "Competitive Edge",
      description:
        "Deep reverse-engineering of your competitors to identify their weaknesses and exploit existing market gaps.",
      icon: <IconTrophy />,
    },
    {
      title: "Device Optimization",
      description:
        "Flawless search performance across mobile, tablet, and desktop to capture users wherever they are.",
      icon: <IconDeviceAnalytics />,
    },
    {
      title: "Growth Acceleration",
      description: "Real-time tracking and continuous refinement to ensure your ROI keeps climbing year after year.",
      icon: <IconRocket />,
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
