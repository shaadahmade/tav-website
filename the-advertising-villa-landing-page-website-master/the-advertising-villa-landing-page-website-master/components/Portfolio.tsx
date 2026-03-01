import React from 'react';
import { Reveal } from './ui/Reveal';
import { ParallaxVideo } from './ui/ParallaxVideo';

export const Portfolio: React.FC = () => {
  const projects = [
    {
        title: "Dream it, We get it!",
        category: "Real Estate",
        color: "bg-brand-orange text-white",
        video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-living-room-interior-24754-large.mp4"
    },
    {
        title: "New Adventures",
        category: "Travel Agency",
        color: "bg-brand-teal text-white",
        video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-coastline-and-forest-4029-large.mp4"
    },
    {
        title: "Future Banking",
        category: "Finance",
        color: "bg-brand-purple text-white",
        video: "https://assets.mixkit.co/videos/preview/mixkit-graph-on-a-screen-showing-statistics-2993-large.mp4"
    },
    {
        title: "Eco Living",
        category: "Sustainability",
        color: "bg-green-600 text-white",
        video: "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <Reveal width="100%" variant="down">
          <div className="flex justify-between items-end mb-16">
            <div>
                 <h2 className="text-5xl md:text-8xl font-chunky font-black mb-4 text-brand-black dark:text-white">Selected<br/><span className="text-brand-purple italic">Work</span></h2>
            </div>
            <div className="hidden md:block pb-2">
                <span className="text-sm font-mono uppercase tracking-widest border-b border-brand-teal pb-1 text-brand-teal cursor-pointer hover:text-brand-black dark:hover:text-white hover:border-brand-black dark:hover:border-white transition-colors">See all projects</span>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%" variant="zoom">
              <div className="group cursor-none-target relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-gray-200 dark:border-zinc-800 hover:border-brand-teal transition-colors shadow-lg">
                
                {/* Parallax Video Background */}
                <ParallaxVideo 
                    src={project.video}
                    className="absolute inset-0 w-full h-full"
                    speed={0.1}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start relative z-10">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${project.color}`}>
                            {project.category}
                        </span>
                    </div>
                    
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 relative z-10">
                        <h3 className="text-white text-3xl md:text-5xl font-chunky font-bold leading-tight">
                            {project.title}
                        </h3>
                    </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};