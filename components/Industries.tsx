import React from 'react';
import { Reveal } from './ui/Reveal';
import { CircularGallery, GalleryItem } from './ui/circular-gallery';

const industries: GalleryItem[] = [
  {
    common: "Education",
    binomial: "Knowledge for all",
    photo: {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
      text: "Learning and development",
      by: "Unsplash"
    }
  },
  {
    common: "Manufacturing",
    binomial: "The backbone of industry",
    photo: {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      text: "Industrial production",
      by: "Unsplash"
    }
  },
  {
    common: "Healthcare",
    binomial: "Caring for one another",
    photo: {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      text: "Medical services",
      by: "Unsplash"
    }
  },
  {
    common: "Food and Beverages",
    binomial: "Sustaining the world",
    photo: {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
      text: "Culinary arts",
      by: "Unsplash"
    }
  },
  {
    common: "E-commerce",
    binomial: "Shopping made easy",
    photo: {
      url: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2070&auto=format&fit=crop",
      text: "Digital retail",
      by: "Unsplash"
    }
  },
  {
    common: "Finance",
    binomial: "Economic stability",
    photo: {
      url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop",
      text: "Banking and investment",
      by: "Unsplash"
    }
  },
  {
    common: "Real Estate",
    binomial: "Building the future",
    photo: {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      text: "Property management",
      by: "Unsplash"
    }
  },
  {
    common: "Logistics",
    binomial: "Moving the world",
    photo: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      text: "Supply chain",
      by: "Unsplash"
    }
  },
  {
    common: "Tourism",
    binomial: "Exploring the globe",
    photo: {
      url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop",
      text: "Travel services",
      by: "Unsplash"
    }
  },
  {
    common: "Startup",
    binomial: "Innovation and growth",
    photo: {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      text: "New business ventures",
      by: "Unsplash"
    }
  },
];

export const Industries: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden relative flex flex-col pt-32 md:pt-48 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-50 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      
      <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-20 pt-16 relative z-10 pointer-events-none">
        <Reveal width="100%" variant="zoom">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-chunky font-black text-brand-black mb-4 md:mb-12 leading-none uppercase tracking-tighter">Industries</h2>
            <p className="text-slate-500 max-w-3xl mx-auto font-sans font-medium text-lg md:text-2xl leading-relaxed px-4">
                We provide digital marketing services for industries where <span className="text-brand-purple font-extrabold">Clarity and trust matter most.</span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* Desktop 3D Gallery */}
      <div className="hidden md:block w-full h-[900px] -mt-10 relative">
        <div className="absolute inset-0 z-0">
          <CircularGallery items={industries} radius={800} autoRotateSpeed={0.03} />
        </div>
      </div>

      {/* Mobile Horizontal Carousel Layout */}
      <div className="md:hidden w-full pb-16 overflow-hidden">
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory hide-scrollbar">
          {industries.map((item, i) => (
            <div key={i} className="relative min-w-[85vw] sm:min-w-[60vw] h-[400px] shrink-0 snap-center rounded-3xl shadow-xl overflow-hidden group border border-slate-100">
               <img 
                 src={item.photo.url} 
                 alt={item.photo.text} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                   <h3 className="text-3xl font-chunky font-black uppercase tracking-tight mb-2">{item.common}</h3>
                   <p className="text-xs sm:text-sm font-sans text-brand-teal font-bold uppercase tracking-widest">{item.binomial}</p>
               </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};