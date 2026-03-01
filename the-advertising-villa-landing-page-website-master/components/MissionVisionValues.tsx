import React from 'react';
import { Reveal } from './ui/Reveal';

export const MissionVisionValues: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black bg-grid-pattern transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-8">
          
          {/* Mission */}
          <Reveal className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-teal transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">M</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">OUR MISSION</h3>
              <p className="text-sm text-brand-teal font-mono uppercase mb-6 tracking-wide">What drives us</p>
              <ul className="space-y-4 text-slate-600 dark:text-zinc-400 text-sm">
                <li>• Custom-built experiences that fit your exact needs</li>
                <li>• Infuse creativity and innovation into every project</li>
                <li>• Maintain uncompromising quality with ethical approach</li>
                <li>• Clear, transparent communication at every step</li>
              </ul>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-purple transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">V</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">OUR VISION</h3>
              <p className="text-sm text-brand-purple font-mono uppercase mb-6 tracking-wide">The next level</p>
              <ul className="space-y-4 text-slate-600 dark:text-zinc-400 text-sm">
                <li>• Innovate Ahead of the Industry</li>
                <li>• Deliver With Speed & Precision</li>
                <li>• Put Clients at the Heart of Everything</li>
                <li>• Fuel Long-Term Growth</li>
              </ul>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.4} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-orange transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">C</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">CORE VALUES</h3>
              <p className="text-sm text-brand-orange font-mono uppercase mb-6 tracking-wide">Beliefs you can feel</p>
              <div className="space-y-4 text-slate-600 dark:text-zinc-400">
                {[
                  { t: "Integrity", d: "We keep our word, own our decisions." },
                  { t: "Customer First", d: "Your goals are our commitments." },
                  { t: "Innovation", d: "Fresh, bold, tailor-made solutions." },
                  { t: "Sustainability", d: "Future-proof thinking." }
                ].map((v, i) => (
                  <div key={i}>
                    <span className="font-bold text-brand-black dark:text-zinc-200">{v.t}:</span> <span className="text-sm">{v.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};