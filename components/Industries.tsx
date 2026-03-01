import React from 'react';
import { Reveal } from './ui/Reveal';

const industries = [
  { n: "Education", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" },
  { n: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
  { n: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
  { n: "Food and Beverages", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop" },
  { n: "E-commerce", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2070&auto=format&fit=crop" },
  { n: "Finance", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop" },
  { n: "Real Estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" },
  { n: "Transportation & Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
  { n: "Travel & Tourism", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop" },
  { n: "Startup", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" },
];

const IndustryCard: React.FC<{ item: { n: string, img: string } }> = ({ item }) => (
    <div className="w-full h-[350px] md:h-[450px] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
        <img src={item.img} alt={item.n} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20">
            <h3 className="text-3xl md:text-5xl font-chunky font-black text-white stroke-text-white group-hover:text-brand-teal transition-colors">
                {item.n}
            </h3>
        </div>
    </div>
);

export const Industries: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden relative flex flex-col py-32 md:py-48 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-50 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      
      <div className="container mx-auto px-4 md:px-6 mb-20 md:mb-32 pt-16">
        <Reveal width="100%" variant="zoom">
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl md:text-[10rem] font-chunky font-black text-brand-black mb-8 md:mb-12 leading-none">Industries We Work With</h2>
            <p className="text-slate-500 max-w-3xl mx-auto font-chunky font-bold text-xl md:text-3xl leading-relaxed px-4">
                We provide digital marketing services for industries where <span className="text-brand-purple font-black">Clarity and trust matter most.</span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
             {industries.map((item, i) => (
                 <Reveal key={i} delay={0.1} width="100%" variant="up">
                     <IndustryCard item={item} />
                 </Reveal>
             ))}
          </div>
      </div>
    </section>
  );
};