import React from 'react';
import { ShieldCheck, Users, Sparkles, Award, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../../data/roofingData.ts';

interface WhyChooseUsSectionProps {
  onLearnMore: () => void;
  onOpenEstimate: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onLearnMore,
  onOpenEstimate
}) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-6 h-6 text-white" />;
      case 1:
        return <Sparkles className="w-6 h-6 text-white" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 3:
        return <Award className="w-6 h-6 text-white" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="bg-white py-20 border-b border-[#E8E2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#B52F24]">
            Reliable Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] font-['Plus_Jakarta_Sans'] tracking-tight">
            Why Property Owners Choose RoofPro
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We don’t cut corners, use substandard chemicals, or leave you stranded after rain starts. Here is why property owners across Sindh trust RoofPro.
          </p>
        </div>

        {/* 4 Feature Items with Red Circular Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#FAF7F5] rounded-2xl p-6 border border-[#E8E2DF] hover:border-[#B52F24]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Red Circular Icon */}
                <div className="w-14 h-14 rounded-full bg-[#B52F24] group-hover:bg-[#8F211A] flex items-center justify-center shadow-md shadow-[#B52F24]/20 mb-5 transition-colors">
                  {getIcon(idx)}
                </div>

                <div className="text-[11px] uppercase font-bold text-[#B52F24] tracking-wider mb-1">
                  {item.tag}
                </div>

                <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans'] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2DF]/60">
                <span className="text-xs font-semibold text-neutral-500 group-hover:text-[#B52F24] transition-colors flex items-center gap-1">
                  Commitment to Quality
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Call-to-Action */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onLearnMore}
            className="py-3 px-6 bg-[#202020] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            Learn More About Our Standards
          </button>
          <button
            onClick={onOpenEstimate}
            className="py-3 px-6 bg-[#B52F24] hover:bg-[#8F211A] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Request Your Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
