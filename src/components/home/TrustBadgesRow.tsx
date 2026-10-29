import React from 'react';
import { Shield, CheckCircle2, Award, Users, FileCheck, ThumbsUp } from 'lucide-react';
import { TRUST_INDICATORS } from '../../data/roofingData.ts';

export const TrustBadgesRow: React.FC = () => {
  const getBadgeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5" />;
      case 1:
        return <Award className="w-5 h-5" />;
      case 2:
        return <Shield className="w-5 h-5" />;
      case 3:
        return <FileCheck className="w-5 h-5" />;
      case 4:
        return <CheckCircle2 className="w-5 h-5" />;
      case 5:
        return <ThumbsUp className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-white py-12 border-b border-[#E8E2DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-widest font-extrabold text-neutral-400">
            Professional Work Standards & Core Guarantees
          </span>
        </div>

        {/* Safe, non-hallucinated trust badges matching Pakistani localization instructions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {TRUST_INDICATORS.map((b, idx) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#E8E2DF]/80 bg-[#FAF7F5]/50 hover:bg-white hover:border-[#B52F24]/30 hover:shadow-sm transition-all duration-200 text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-[#B52F24]/10 text-neutral-700 group-hover:text-[#B52F24] flex items-center justify-center mb-2.5 transition-colors">
                {getBadgeIcon(idx)}
              </div>
              <div className="text-xs font-bold text-neutral-800 font-['Plus_Jakarta_Sans'] group-hover:text-[#B52F24] transition-colors">
                {b.name}
              </div>
              <div className="text-[11px] font-extrabold text-[#B52F24] mt-0.5">
                {b.highlight}
              </div>
              <div className="text-[10px] text-neutral-400 mt-0.5">
                {b.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
