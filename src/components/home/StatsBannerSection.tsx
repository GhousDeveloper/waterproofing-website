import React from 'react';
import { WaveDivider } from '../common/WaveDivider.tsx';
import { STATS, IMAGES } from '../../data/roofingData.ts';

export const StatsBannerSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Dark Red Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.completed}
          alt="Completed roofing and waterproofing project"
          className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-[1.2]"
        />
        {/* Red tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#681A16]/90 via-[#8F211A]/85 to-[#B52F24]/85 mix-blend-multiply" />
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <WaveDivider color="#FAF7F5" position="top" height={44} />
      </div>

      {/* Center Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Field Standards & Dedication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans'] tracking-tight">
            Protecting Properties Across Sindh with Proven Solutions
          </h2>
          <p className="text-sm text-red-100/80">
            Quality waterproofing compounds, high-albedo heat reflective coatings, and dedicated client service.
          </p>
        </div>

        {/* Center Floating White Statistics / Pillars Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-white/20 text-[#202020] max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E2DF]">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#B52F24] font-['Plus_Jakarta_Sans'] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
        <WaveDivider color="#ffffff" position="bottom" height={44} />
      </div>
    </section>
  );
};
